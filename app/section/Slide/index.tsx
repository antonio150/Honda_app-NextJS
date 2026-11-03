"use client";

export default function Slide()
{
    const media= [
        {
           Rugged:[
            
           ] 
        }
    ]
    return(
        <div className="flex justify-between">
            <button onClick={() => alert("prev")}>
                prev
            </button>
            <div>

            </div>
            <button onClick={() => alert("next")}>
                next
            </button>
        </div>
    )
}