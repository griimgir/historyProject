import "./post.css"
// import postsPic from './cottage.jpg'

export default function Post3() {
    return (
        <div className="post">
            <img
                className="postImg"
                // src={postsPic}
                src="https://cdn.discordapp.com/attachments/406329493574123521/902022239443095582/800px-Toyotomi_Hideyoshi_Kodaiji.jpg"
                alt="" 
            />
            <div className="postInfo">
                {/* <div className="postCats">
                    <span className="postCats">Entree 1</span>
                    <span className="postCats">Entree 2</span>
                </div> */}
                <span className="postTitle">
                    
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">

            </p>
        </div>
    );
}
