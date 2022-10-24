import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newspace extends Component {
  articles= [
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Richard Lawler",
        "title": "Former Uber security chief found guilty of covering up massive 2016 data breach",
        "description": "Uber paid two hackers $100,000 in Bitcoin to keep a 2016 data breach quiet, and now a jury has convicted former chief security officer Joe Sullivan on two charges for not reporting the incident to authorities.",
        "url": "https://www.theverge.com/2022/10/5/23390063/uber-security-chief-convicted-hack-cover-up-bounty-payment",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/lh2YBh8cWvn3ARrenXxjolBte4o=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23932655/acastro_STK106__01.jpg",
        "publishedAt": "2022-10-06T00:25:32Z",
        "content": "Former Uber security chief found guilty of covering up massive 2016 data breach\r\nFormer Uber security chief found guilty of covering up massive 2016 data breach\r\n / Prosecutors claimed Joe Sullivan h… [+4358 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Emma Roth",
        "title": "Google’s partnering with Coinbase to let cloud customers pay in crypto next year",
        "description": "Starting in 2023, Google will partner with Coinbase to power crypto-based transactions for “select” customers in the Web3 space.",
        "url": "https://www.theverge.com/2022/10/11/23398306/google-coinbase-partnership-crypto-2023-cloud",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/a1UuqmTXeWu_sDyVAVipeGpIQ0s=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
        "publishedAt": "2022-10-11T14:29:54Z",
        "content": "Googles partnering with Coinbase to let cloud customers pay in crypto next year\r\nGoogles partnering with Coinbase to let cloud customers pay in crypto next year\r\n / The search giant will use Coinbase… [+1913 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Crypto firm 21Shares lists bitcoin ETP on Nasdaq Dubai - Reuters.com",
        "description": "Crypto investment products firm 21.co said on Wednesday its subsidiary 21Shares AG has listed a bitcoin exchange-traded product on Nasdaq Dubai, making it the Middle East's first physically-backed bitcoin ETP.",
        "url": "https://www.reuters.com/technology/crypto-firm-21shares-lists-bitcoin-etp-nasdaq-dubai-2022-10-12/",
        "urlToImage": "https://www.reuters.com/resizer/e-rtKXHJBMDr3n3yPuzMmaBrXaE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/62VXJFTHEZNRZM4CO6PTL5CS3A.jpg",
        "publishedAt": "2022-10-12T06:05:00Z",
        "content": "DUBAI, Oct 12 (Reuters) - Crypto investment products firm 21.co said on Wednesday its subsidiary 21Shares AG has listed a bitcoin exchange-traded product on Nasdaq Dubai, making it the Middle East's … [+1642 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Cryptoverse: Bitcoin miners get stuck in a bear pit - Reuters",
        "description": "Cryptoverse: Bitcoin miners get stuck in a bear pit  Reuters",
        "url": "https://www.reuters.com/technology/cryptoverse-bitcoin-miners-get-stuck-bear-pit-2022-09-27/",
        "urlToImage": "https://www.reuters.com/resizer/i0pAJuhLdd7LHa8MRf9_AOBX3ts=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OWRJ2G6AQNOSBCG2QYUETRASBY.jpg",
        "publishedAt": "2022-09-27T05:13:00Z",
        "content": "Sept 27 (Reuters) - Spare a thought for the beleaguered bitcoin miner.\r\nIn late 2021, miners were the toast of the town with a surefire path to profit: hook powerful computers up to cheap power, crac… [+3450 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Andy Greenberg",
        "title": "Celsius Exchange Data Dump Is a Gift to Crypto Sleuths—and Thieves",
        "description": "By releasing half a million users’ transactions in a bankruptcy court filing, the company has opened a vast breach in its users’ financial privacy.",
        "url": "https://www.wired.com/story/celsius-user-data-dump-crypto-tracing-scammers/",
        "urlToImage": "https://media.wired.com/photos/6347486008a267a4aad8c04d/191:100/w_1280,c_limit/Celsius-Exchange-Data-Dump-GettyImages-1272233098.jpg",
        "publishedAt": "2022-10-13T11:00:00Z",
        "content": "The paradoxical nature of cryptocurrency's privacy is that the blockchain, that unchangeable ledger of all a cryptocurrency's transactions, serves as both a map and a mask: Bitcoin are easy enough to… [+3212 chars]"
    },
    {
        "source": {
            "id": "engadget",
            "name": "Engadget"
        },
        "author": "Jon Fingas",
        "title": "Mastercard wants to make crypto purchases less risky",
        "description": "Crypto is still loaded with uncertainty, but Mastercard is betting that it can assuage buyers' minds. The credit card giant has introduced a Crypto Secure service meant to boost trust in crypto purchases. The offering uses AI from CipherTrace (a blockchain se…",
        "url": "https://www.engadget.com/mastercard-crypto-secure-200559003.html",
        "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/b2ecadc0-4419-11ed-aedf-3ae191550ab7",
        "publishedAt": "2022-10-04T20:05:59Z",
        "content": "Crypto is still loaded with uncertainty, but Mastercard is betting that it can assuage buyers' minds. The credit card giant has introduced a Crypto Secure service meant to boost trust in crypto purch… [+1448 chars]"
    }
]
  constructor()
  {
    super();
    console.log("constructor added");
    this.state={
    articles : this.articles,
    }
  }
  render() {
    return (
    <>
    <div className="newsheading"><h1>Top Headlines</h1></div><br/>
      <div className="row">
        {this.state.articles.map((element)=>{
          return ( 
        <div className="col-md-4">
        <Newsitem title={element.title} desc={element.description} url={element.urlToImage} readmore={element.url}/><br/>
        </div>
          )
        })}
      </div>
    </>
    )
  }
}
