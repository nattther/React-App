function InputComponent({title ,onChangeHandler}){

    return(<>
          <p>{title}</p>
          <input type="number" onChange={(e) => onChangeHandler(e.target.value)}></input>
    </>)
}

export default InputComponent