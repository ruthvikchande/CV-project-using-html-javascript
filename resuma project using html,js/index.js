console.log("this is cv project");
// array of object which contain informatoion about candidate
const data=[{
    name:"rohan das",
    age:18,
    city:"mumbai",
    language:"pythone",
    framework:"jango",
    image:"https://randomuser.me/api/portraits/men/77.jpg"
},
{
    name:"shubham",
    age:19,
    city:"mumbai",
    language:"js",
    framework:"node js",
    image:"https://randomuser.me/api/portraits/men/75.jpg"
},
{
    name:"bhoja aiim",
    age:23,
    city:"goa",
    language:"pythone",
    framework:"flask",
    image:"https://randomuser.me/api/portraits/men/66.jpg"
},
{
    name:"rohit sharma",
    age:34,
    city:"mumbai",
    language:"go",
    framework:"framework",
    image:"https://randomuser.me/api/portraits/men/61.jpg"
},
]
// cv iteratot
function cvIterator(profiles){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<profiles.length?
            {value:profiles[nextIndex++],done:false}:
            {done:true}
        }
    };
}


const candidates=cvIterator(data);




const next=document.getElementById('next');
next.addEventListener('click',nextcv);



function nextcv(){
    const currentCandidate=candidates.next().value;

    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    image.innerHTML=`<img src="${currentCandidate.image}">`;

    profile.innerHTML=`<ul class="list-group">
    <li class="list-group-item">${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age}</li>
    <li class="list-group-item">${currentCandidate.city}</li>
    <li class="list-group-item">${currentCandidate.language}</li>
    <li class="list-group-item">${currentCandidate.framework}</li>
  </ul>`;

}