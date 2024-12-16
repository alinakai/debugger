import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push (new bugModel({
        _id:23456789,
        name:"Crash on load",
        details: "Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V2.0",
        assigned:"Ryan Beasley",
        creator:"Joe Bloggs",
        priority:1,
        time:"23:38",



    }))


    data.push (new bugModel({
        _id:23456789,
        name:"Won't load",
        details: "Stops loading after 10 seconds",
        steps:"Open application and it will not crash but will stop loading",
        version:"V2.0",
        assigned:"Ryan Beasley",
        creator:"Joe Bloggs",
        priority:3, 
        time:"23:42",
        


    }))

    // Grabs bugs by priority when sorting. It will return the higher priorities first. 
    let sorted = data.sort((a,b)=>{return a.priority - b.priority });
    return sorted; 

}