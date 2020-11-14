import firebase from '../../firebase'

const set_data = (data) => {
    return (dispatch) => {
        dispatch({ type: "SETDATA", data: data })
    }
}

const set_seller_data = (selldata) => {
    console.log("INDEX JS==>", selldata)
    return (dispatch) => {
        dispatch({ type: "SETSELLDATA", data: selldata })
    }
}

const setCurrentKey = (data) => {
  //  console.log("The key is: ", key)
    return (dispatch) => {
        dispatch({ type: "SETCURRENTKEY", data: data })
    }
}


const setSelectedCategory =(c) =>{
    console.log("The selected category is : ",c)
    return (dispatch)=>{
        dispatch({type:"SETSELECTEDCATEGORY",data:c})
    }
}




const add_bookmark = (i) => {
    console.log("The bookmark is: ", i)

    ////////////////////////////
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    dateTime = dateTime.toString();
    //  ////////////////////////////

    let bookmark={
        index:i,
        time:dateTime
    }

    firebase.database().ref(`BookMark/`).push(bookmark);
}

const get_bookmarked=()=>{
    return (dispatch) => {

        let users = [];
        firebase.database().ref(`BookMark/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                users.push(data.val())
            })
            dispatch({ type: "GET_BOOKMARKED", data: users })
            //console.log(users)
        })
    }
}

const sendData = (data) => {
    console.log("challl nahi bhag raha hai", data)
    ////////////////////////////
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    dateTime = dateTime.toString();
    //  ////////////////////////////

    let res12;
    let str12 = data.SellerEmail;
    res12 = str12.split("@").join("");
    res12 = res12.split(".").join("");
    res12 = res12.split("`").join("");
    res12 = res12.split("!").join("");
    res12 = res12.split(".").join("");
    res12 = res12.split("#").join("");
    res12 = res12.split("%").join("");
    res12 = res12.split("^").join("");
    res12 = res12.split("&").join("");
    res12 = res12.split("*").join("");
    res12 = res12.split("(").join("");
    res12 = res12.split(")").join("");
    res12 = res12.split('"').join("");
    res12 = res12.split("'").join("");
    res12 = res12.split("_").join("");
    res12 = res12.split("-").join("");
    res12 = res12.split("+").join("");
    res12 = res12.split("=").join("");
    res12 = res12.split("}").join("");
    res12 = res12.split("{").join("");
    res12 = res12.split("]").join("");
    res12 = res12.split("[").join("");
    res12 = res12.split("|").join("");
    res12 = res12.split("/").join("");
    res12 = res12.split("?").join("");
    res12 = res12.split(";").join("");
    res12 = res12.split(",").join("");



    /////////////////////////////////////////////////////////////////////////    
    //Setting the current user
    let SellerData = {
        ...data,
        dateTime
    }
    let category = data.Category;


    //For storing all ads i.e to show at main page
    firebase.database().ref(`WithSignIn/`).push(SellerData);




    //For storing the seller personal ads
    //firebase.database().ref(`WithSignIn/${category}/${res12}`).push(SellerData);

    //For storing ads category wise
    //firebase.database().ref(`WithoutSignIn/${category}/`).push(SellerData);


}


const get_seller_all_data = () => {
    return (dispatch) => {

        let users = [];
        firebase.database().ref(`WithSignIn/`).on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                users.push(data.val())
            })
        
            dispatch({ type: "GETSELLDATA", data: users }) 
            //console.log(users)
        })        
    }
}



export {
    set_data,
    set_seller_data,
    sendData,
    get_seller_all_data,
    setCurrentKey,
    add_bookmark,
    get_bookmarked,
    setSelectedCategory,
   
}