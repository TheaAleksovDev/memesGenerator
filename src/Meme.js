import React from "react"
export default function Meme(){

    const [meme , setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState()

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(data=>setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const imgArr = allMemes
        const random = Math.floor(Math.random() * imgArr.length)
       setMeme(prevMeme => {
        return{
            ...prevMeme,
            randomImage: imgArr[random].url
        }
       })
    }

    function handleChange(event){
        const{name,value} = event.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name] : value
        }))
    }
    
    return(
        <div className="whole-meme">
            <div className="input-container">
            <div className="input">
                <input 
                 className="up"
                 type="text" 
                 placeholder="Top text"
                 name="topText"
                 value={meme.topText}
                 onChange={handleChange}
                 />
                <input 
                 className="down"
                 type="text"
                 placeholder="Bottom text"
                 name="bottomText"
                 value={meme.bottomText}
                 onChange={handleChange}
                 />
            </div>
            <button onClick={getMemeImage}>Get a new meme image</button>

        </div>
          <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        
        </div>
        
    )
}