// Creted by self lala
let user="";
user="lovebabbar";
let btn=document.querySelector('.searchBtn');
let field=document.querySelector("[userName]");
let warning=document.querySelector('.not_valid');
let modetext=document.querySelector("[DarkMode]");
modetext.textContent="DARK";
let wrapper=document.querySelector('.wrapper');
let info=document.querySelector('.userInfo');
let modeBtn=document.querySelector(".modechange");
let header1=document.querySelector(".topContent");
let img1=document.querySelector('.modeImg');
img1.classList.add("modeImg-light");
fetchData(user);
// img1.classList.add("modeImg");
warning.classList.add("not_valid_remove");
async function fetchData(user){
    try{
        let userName=await fetch(`https://api.github.com/users/${user}`);
        let response=await userName.json();
        renderData(response);
    }
    catch(e){
        alert(e);
    }
}
function renderData(response){
    let naam=document.querySelector("[namme]");
   // info.classList.remove("display_none");
    if(response?.login==null || response?.public_repos==null){
        warning.classList.add("not_valid_active");
        warning.classList.remove("not_valid_remove");
        setTimeout(() => {
            warning.classList.remove("not_valid_active");
            warning.classList.add("not_valid_remove");
           
        }, 3000);
        info.classList.add("display_none");
    }
    let link=document.querySelector('[pathLink]');
    let biography=document.querySelector('[bio]');
    let date=document.querySelector('[joinDate]');
    let repos=document.querySelector("[dataRepo]");
    let followers=document.querySelector('[dataFollowers]');
    let following=document.querySelector('[dataFollowing]');
    // let location=document.querySelector('[dataLocation]');
    let website=document.querySelector('[dataWebsite]');
   
    if(response?.blog==null){
        website.innerText="NOT AVAILABLE";
        // website.href="NOT AVAILABLE";
    }
    else{
        website.textContent=response?.blog;
    website.href=response?.blog;
    }
    let twitter=document.querySelector('[dataTwitter]');
    if(response?.twitter_username==null){
        twitter.textContent="NOT AVAILABLE";
    }
    else{
        twitter.textContent=response?.twitter_username;
    }
    let lalaImg=document.querySelector("[userImg]");
    let company=document.querySelector('[dataCompany]');
    if(response?.company==null){
        company.textContent="NOT AVAILABLE";
    }
    else{
        company.textContent=response?.company;
    }
    let locate=document.querySelector("[dataLocation]");
    if(response?.location==null){
        locate.textContent="NOT AVAILABLE";
    }
    else{
        locate.textContent=response?.location;
    }
    // naam.innerText=response?.owner?.login;
   
    link.textContent=response?.html_url;
     link.href=response?.html_url;
    lalaImg.src=response?.avatar_url;
    // if(response?.bio!=null){
    biography.innerText= response?.bio;
    // }
    // repos.textContent=`${response.public_repos}`
    naam.textContent=response?.login;
    repos.textContent=response?.public_repos;
    followers.textContent=response?.followers;
    following.textContent=response?.following;
   
   
    
    
    
   let dateData=new Date(response?.created_at);
   let createdDate=dateData.toLocaleDateString();
    date.textContent="JOINED ON:"+createdDate;

}

btn.addEventListener('click',()=>{
    user=field.value;
   if(field.value=="" || field.value.includes(' ')){
    warning.classList.add("not_valid_active");
    warning.classList.remove("not_valid_remove");
    setTimeout(() => {
        warning.classList.remove("not_valid_active");
        warning.classList.add("not_valid_remove");
       
    }, 3000);
   }
   else{
    warning.classList.remove("not_valid_active");
    warning.classList.add("not_valid_remove");
    fetchData(user);
   }
       
        
    
})
// function add(){
   
// }
// function getWarning(){
//     // setTimeout(add(),4000);
//     add();
//     // warning.classList.remove("active");
// }
modeBtn.addEventListener('click',()=>{
    if(modetext.textContent=="DARK"){
        img1.classList.remove("modeImg-light");
        img1.classList.add("modeImg-dark");
        modetext.textContent="LIGHT";
        wrapper.classList.add("wrapper_dark");
        header1.classList.add("topContent_dark");
    }
    else{
        img1.classList.add("modeImg-light");
        img1.classList.remove("modeImg-dark");
        modetext.textContent="DARK";
        wrapper.classList.remove("wrapper_dark");
        header1.classList.remove("topContent_dark");
    }
})