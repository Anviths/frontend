//password generator
function generatePassword(passwordLength,includeLowercase
    ,includeUpperCase,includeSpecialCharacter,includeNumber){
      const lowercase="qwertyuioplkjhgfdsazxcvbnm"
      const uppercase="ADFYYCTRGVUHIHUGJI";
      const num="0123456789"
      const special="!~@#$%^&*"
     
        let password="";
      let allowedChar="";
      allowedChar+=includeLowercase?lowercase:"";
      allowedChar+=includeUpperCase?uppercase:"";
      allowedChar+=includeNumber?num:"";
      allowedChar+=includeSpecialCharacter?special:"";
      if(passwordLength<=0){
        return `(password length must be more than 1)`
      }
      if(allowedChar.length===0){
        return `(atleast 1 char must be selected)`
      }

      for(let i=0;i<passwordLength;i++){
        const random=Math.floor(Math.random()*allowedChar.length);
        password+=allowedChar[random];
        
      }
       return password;
}
const passwordLength=4k
;
const includeLowercase=true;
const includeUpperCase=true;
const includeNumber=true;
const includeSpecialCharacter=false;

const password=generatePassword(passwordLength,includeLowercase
    ,includeSpecialCharacter,includeUpperCase,includeNumber);

    console.log(password);

