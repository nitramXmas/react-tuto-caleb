function Golfcourse(props) {
  return (
    <>
      <h3>Golf course {props.name} </h3>
      {/*Simpler but style will be the same on both response*/}
      <p>{props.par ? props.par : 'no par infos'}</p>

      {/*More complexe but flexier*/}
      {/* {props.par ? (
        <p class="par">props.par</p>
      ) : (
        <p class="noPar">no par infos</p>
      )} */}
    </>
  );
}

export default Golfcourse;
