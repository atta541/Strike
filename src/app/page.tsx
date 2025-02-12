import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen  text-white p-4 ">
      <h1 className="text-4xl font-bold mb-8 ml-12 text-[#B4A596] ">Shop By Athlete</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        <div className="flex flex-col items-center">
          <Image
            src="https://i.pinimg.com/originals/cf/04/b7/cf04b7217fe088c0b28d40e44a0bd107.jpg"
            alt="Athlete with basketball"
            width={400}
            height={500}
            className="rounded-lg mb-4"
          />
          <p className="text-xl font-semibold">Simone Biles</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="https://i.pinimg.com/originals/a5/ea/1f/a5ea1fcd903a5dd2e949697c1bc181c4.jpg"
            alt="Athlete with soccer ball"
            width={400}
            height={500}
            className="rounded-lg mb-4"
          />
          <p className="text-xl font-semibold">Lisa Leslie</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="https://i.pinimg.com/originals/35/66/78/356678290055648bca690756f82c1236.jpg"
            alt="Athlete in red outfit"
            width={400}
            height={500}
            className="rounded-lg mb-4"
          />
          <p className="text-xl font-semibold">Candace Parker </p>
        </div>
      </div>


      <h1 className="text-4xl font-bold mb-8 ml-12 mt-28 text-[#B4A596]">Foot Wear</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {[
          {
            name: "Simone Biles",
            image: "https://i.pinimg.com/originals/a8/f7/bc/a8f7bcb1faaa8a2b5038078f0a5c5d59.jpg",
          },
          {
            name: "Lisa Leslie",
            image: "https://i.pinimg.com/736x/21/83/a5/2183a5c18e6225e0256c6afb716b03c5.jpg",
          },
          {
            name: "Candace Parker",
            image: "https://i.pinimg.com/originals/3c/2b/e4/3c2be4e551577d903fe7aaba0c927379.png",
          },
        ].map((athlete, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-[400px] h-[500px]">
              <Image
                src={athlete.image}
                alt={athlete.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-xl font-semibold mt-4">{athlete.name}</p>
          </div>
        ))}
      </div>

    </main>
  )
}


