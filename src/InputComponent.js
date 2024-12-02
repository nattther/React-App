function InputComponent({title ,onChangeHandler}){

    return(<>
          <p>{title}</p>
          <input type="number" onChange={onChangeHandler}></input>
    </>)
}

export default InputComponent