import Image from "next/image"

const box1 = {
  image:"../../public/images/slack-square.png",
  heading:"Procurement",
  usecases:"20",

}
const boxcomp =() => {
  return(
     <>
     <box1
     image={box1.image}
     heading={box1.heading}
     usecases={box1.usecases}
     />
     </>
  )
}
export default boxcomp;