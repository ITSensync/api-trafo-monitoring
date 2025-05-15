import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // 1. Data Lokasi: Kec. di Medan
  const kecamatans = [
    {
      kec_id: 'KEC_A',
      nama: 'Medan Kota',
      lat: 3.5833,
      lang: 98.6833,
      alamat: 'Jl. Medan Kota No.1',
    },
    {
      kec_id: 'KEC_B',
      nama: 'Medan Tuntungan',
      lat: 3.53,
      lang: 98.65,
      alamat: 'Jl. Tuntungan No.5',
    },
    {
      kec_id: 'KEC_C',
      nama: 'Medan Helvetia',
      lat: 3.6,
      lang: 98.63,
      alamat: 'Jl. Helvetia No.12',
    },
    {
      kec_id: 'KEC_D',
      nama: 'Medan Timur',
      lat: 3.59,
      lang: 98.7,
      alamat: 'Jl. Timur No.3',
    },
  ];

  let trafoNumber = 1;

  for (const kec of kecamatans) {
    const location = await prisma.location.create({
      data: {
        nama: kec.nama,
        lat: kec.lat,
        lang: kec.lang,
        alamat: kec.alamat,
      },
    });

    // 2. Format ID trafo: T-0001-<ID_LOKASI>
    const numberPrefix = String(trafoNumber).padStart(4, '0');
    const trafoId = `T-${numberPrefix}-${kec.kec_id}`;

    await prisma.trafo.create({
      data: {
        id: trafoId,
        type: null,
        kapasitas: null,
        locationId: location.id,
      },
    });

    console.log(`Seeded location & trafo: ${kec.nama}`);
    trafoNumber++;
  }
}

main()
  .then(() => {
    console.log('✅ Seeding selesai');
  })
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
