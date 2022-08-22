type PopProps = {
  popFlag: number;
  //onClick: () => void;
};

const NewPopOver = (props: PopProps) => {
  const popClose = () => {
    console.log("close");
    const a = document.getElementById("content")!;
    a.style.display = "none";
  };

  if (props.popFlag === 0) {
    return (
      <div id="overlay" className="newPop">
        <div id="content">
          <div>予定の作成&nbsp;&nbsp;</div>
          <div>
            <button onClick={popClose}>Close</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default NewPopOver;
