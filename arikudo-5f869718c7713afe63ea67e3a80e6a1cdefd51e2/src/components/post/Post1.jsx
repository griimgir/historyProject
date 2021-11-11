import "./post.css"
// import postsPic from './cottage.jpg'

export default function Post1() {
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
                Political commissions
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
            Kano Motononu was a great master of Japanese painting that was part of the Kano school of painting. As Kano school of painting had close ties with the gorning rulers of japan they were usually commissioned to do portraits of rulers like this portrait of Toyotomi Hideyoshi. Like many of the painters in Kano, their painting style is derived from Chinese traditional painting. Their style of painting is dictated by the theory of monochromatic ink-painting - suiboku-ga(Britannica, 2021). This is where the painter chooses one color to paint a composition. However, once Tosa Mitsunobu arrived in the business of painting, he developed Yamato-e when he created his own philosophy of painting named the Tosa school of painting (Britannica, 2021). He developed paintings that were not as monochromatic but instead combined strong brushstrokes and color mixing in his painting. This was an early form of color mixing theory and was the beginning of paintings created to be aesthetic and used dominantly to decorate interior places in Japan.
            </p>
        </div>
    );
}
