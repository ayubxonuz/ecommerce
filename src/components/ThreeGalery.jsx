function ThreeGalery({img1, img2, img3}) {
  return (
    <div className="flex gap-x-8 my-40">
      <div>
        <div
          className={`bg-[url('${img1}')] rounded-lg bg-center w-[445px] h-[295px] mb-8`}
        ></div>
        <div
          className={`bg-[url('${img2}')] rounded-lg bg-center w-[445px] h-[295px]`}
        ></div>
      </div>
      <div
        className={`bg-[url('${img3}')] bg-left rounded-lg w-[635px] h-[622]`}
      ></div>
    </div>
  )
}

export default ThreeGalery
