export const checkValidation = (email ,password) =>{
    const isValidEmail=/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
    const isValidPassword=/^(?=.*?[0-9])(?=.*?[a-zA-Z]).{3,30}$/.test(password);

    if(!isValidEmail)return "Invalid Email Format";
    if(!isValidPassword)return "Create Strong Password";

    return null;

}