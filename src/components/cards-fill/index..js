
import React from 'react';
import './index.css';
class Cardsfill extends React.Component{
    cardNames=['Ghost','Werewolf','Skull','Vampire','Pumpkin','Zombie','Ears','Witch','Devil','Movie theater','Heavy','Light','Near','Far','Fast','Slow','Strong','Weak','Big','Small','Afraid','Brave','high','Library','Body','Head','Torso','Chest','Shoulder','Arm','Elbow','Hand','Mall','Belly','Waist','Back','Leg','Sing','Thigh','Knee','Foot','Farmer','Priest','Waiter','Right','Left','Street','Sun rise','Sunset','Between','Front of','Behind','Next to','Drug Store','Pikachu','Doggy'];
    cardUrl=[
        'https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087005/englishLotery/bvjfggakzzeodqizxxtv.jpg',
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087071/englishLotery/yzuwmnebvfolj1yvcayh.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087136/englishLotery/vf5ivl1p34vlwnbroffu.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087146/englishLotery/mqfpujd9iaq1zpvhfw0y.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087155/englishLotery/fe5spkhmo7lufrxj7602.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087164/englishLotery/exalyza683dnb1q8pjyv.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087177/englishLotery/zl5i3avjkwrxrs3lyxqc.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087194/englishLotery/fzg796ir2xkr5pp2bov4.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087203/englishLotery/mp8lbx7bfxojh8psnejs.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087205/englishLotery/a6fpnruprp7w6a8ei2rm.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087213/englishLotery/ozemlq8mugt1ji7wkde2.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087216/englishLotery/l1ovbdm4fqno7zdifkzu.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087219/englishLotery/axqfxxhhhizhjdm6bbtz.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087222/englishLotery/ldib59wwdbllj9xgg7tl.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087223/englishLotery/aa4albnsecdnexreox8j.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087225/englishLotery/mbhldor6r36rvurfbafe.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087227/englishLotery/y5moftscptw9anxjli8l.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087230/englishLotery/xpiuloxm653kxmtewiug.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087234/englishLotery/hjo2figcit5xugg0hayo.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087236/englishLotery/if185xw5fiegvebb030k.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087240/englishLotery/f1romppevts0upqsvlnc.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087242/englishLotery/hpjtvg4mgwmsz6mj2d4y.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087244/englishLotery/xo7pclregimryrkbxpfq.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087246/englishLotery/rtjfcrfzdh9i1nrntwoc.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087254/englishLotery/ee2pngtkyowki4gic1wa.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087256/englishLotery/tah3zyuc9i2cnzv32sqr.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087258/englishLotery/bybpwnnhq8qyutlhgwug.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087260/englishLotery/khx5ptbuzbmorb2b6avn.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087262/englishLotery/iglkub5gye9fwcgqyrvw.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087263/englishLotery/dc7u2d97amnvaaqodq0y.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087268/englishLotery/punkogx8klaz5xaunvcy.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087271/englishLotery/tluxv5xbvrxzb1hrjwns.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087273/englishLotery/ufpoenslm7zszvwkuhxh.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087275/englishLotery/lxduqg8vufzwok6hzlun.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087277/englishLotery/zouflswdbtbwtvhq5jap.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087280/englishLotery/hk48nbkgseusjhg2nmp8.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087282/englishLotery/jrpwoxnk822n7xveamj3.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087283/englishLotery/paw5jrndgy0w5fazjmay.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087285/englishLotery/r9nhsvelzbfnxxiflujb.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087287/englishLotery/dvzvz3snfkb968hw6vf9.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087291/englishLotery/meumae208ybzopjwvszf.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087294/englishLotery/yi5t6d316hpleqgvlv76.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087297/englishLotery/tcju0eml6j7epawb3oaj.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087300/englishLotery/eqxmtojbnshguhdx91iq.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087302/englishLotery/iv8obxedgrft4ia5s6op.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087305/englishLotery/ldljugcufq1gsuyrbjob.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087308/englishLotery/hh3hlkjredatlj0ue4ll.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087312/englishLotery/utwapezjh1p5ecsrwttz.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087316/englishLotery/qskt6ut4xc0bcloqp1tf.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087319/englishLotery/ewujtmh5dawwvfkmffq6.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087322/englishLotery/ikccszmfqdmgkqysshbk.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087324/englishLotery/dvfzfwzgdjkmhkmfbbsc.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087327/englishLotery/usnqargmjrejrqk8bnwl.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087331/englishLotery/xkhkgdkoirb4jtbvocza.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087333/englishLotery/pcqyiqkut5bqyr3boyyi.jpg`,
        `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1644087336/englishLotery/lv6yewcxyprl7kjisorq.jpg`

    ]

    createCard=(props)=>{
        const element=<div className="items">
                        <img src={this.cardUrl[props.number]} alt="img" />
                        <h2 >{this.cardNames[props.number]}</h2>
                        <span>{props.number+1}</span>
                    </div>
        return element
    }

    render(){
        return(
            
            <div className="cards" id="cards">
                {
                    this.cardNames.map((name,index)=>{
                        return(
                            <this.createCard key={index} number={index}></this.createCard>
                        )
                    })
                }
            </div>
            
        );
    }
}



export default Cardsfill;