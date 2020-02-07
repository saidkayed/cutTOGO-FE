import React from 'react'
import "./HomeStyle.css"
const HomeMarkup = (props) => {

    return (
        <div>
            <div id="bgnimg">
                <div class="contentContainer">
                    <div class="centerText">
                        <h1>Din stil, Dit valg <br /><span id="edit">Find din lokale frisør</span></h1>
                    </div>


                    <div id="sContainer">
                        <p>Find din frisør online</p>
                        <form class="example" style={{ margin: "auto", maxWidth: "500px" }}>
                            <input type="number" placeholder="Indtast dit postnummer" name="search2" />
                            <button type="submit"><i>find frisør</i></button>
                        </form>
                    </div>
                </div>
            </div>

            <div id="infoContainer">

                <p id="infTitle">Der er mange gode grunde til at bruge cutTOGO</p>

                <div class="row">
                    <div class="column" style={{ backgroundColor: "#990011FF" }}>

                        <img id="infImg" src={require('../../image/lady.jpg')} />

                        <p class="infText">Some text..</p>
                    </div>
                    <div class="column" style={{ backgroundColor: "#990011FF" }}>
                        <img id="infImg" src={require('../../image/lady.jpg')} />
                        <p class="infText">Some text..</p>
                    </div>
                    <div class="column" style={{ backgroundColor: "#990011FF" }}>
                        <img id="infImg" src={require('../../image/child.jpg')} />
                        <p class="infText">Some text..</p>
                    </div>

                </div>


            </div>

            <div id="descContainer">
                <div id="descText">
                    <h2>AAAAAAAAAAAAA</h2>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p></p>

                    <h2>AAAAAAAAAAAAA</h2>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p></p>
                    <h2>AAAAAAAAAAAAA</h2>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p></p>
                    <h2>AAAAAAAAAAAAA</h2>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p>
                    <p></p>

                </div>
            </div>

            

        </div>

    );

}

export default HomeMarkup