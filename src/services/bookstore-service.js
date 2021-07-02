export default class BookStoreService {

    data=[
        {
        id:0,
        title:'Designing Data-Intensive Applications',
        author:'Martin Kleppmann',
        price:39,
        image:'https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg',
        description:'Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers. What are the right choices for your application? How do you make sense of all these buzzwords? In this practical and comprehensive guide, author Martin Kleppmann helps you navigate this diverse landscape by examining the pros and cons of various technologies for processing and storing data. Software keeps changing, but the fundamental principles remain the same. With this book, software engineers and architects will learn how to apply those ideas in practice, and how to make full use of data in modern applications.'
        },

        {
        id:1,
        title:'Monolith to Microservices',
        author:'Sam Newman',
        price:37,
        image:'https://images-na.ssl-images-amazon.com/images/I/51QKwzDE4FL._SX379_BO1,204,203,200_.jpg',
        description:'How do you detangle a monolithic system and migrate it to a microservice architecture? How do you do it while maintaining business-as-usual? As a companion to Sam Newman’s extremely popular Building Microservices, this new book details a proven method for transitioning an existing monolithic system to a microservice architecture.With many illustrative examples, insightful migration patterns, and a bevy of practical advice to transition your monolith enterprise into a microservice operation, this practical guide covers multiple scenarios and strategies for a successful migration, from initial planning all the way through application and database decomposition.' 
        },
        {
        id:2,
        title:'Production-Ready Microservices',
        author:'Susan J. Fowler',
        price:32,
        image:'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        description:'One of the biggest challenges for organizations that have adopted microservice architecture is the lack of architectural, operational, and organizational standardization. After splitting a monolithic application or building a microservice ecosystem from scratch, many engineers are left wondering whats next. In this practical book, author Susan Fowler presents a set of microservice standards in depth, drawing from her experience standardizing over a thousand microservices at Uber. You ll learn how to design microservices that are stable, reliable, scalable, fault tolerant, performant, monitored, documented, and prepared for any catastrophe.'
        },
        {
        id:3,
        title:'Release It!',
        author:'Michael T. Nygard',
        price:28,
        image:'https://m.media-amazon.com/images/I/711kreNLLNL._AC_UY327_FMwebp_QL65_.jpg',
        description:'Whether its in Java, .NET, or Ruby on Rails, getting your application ready to ship is only half the battle. Did you design your system to survivef a sudden rush of visitors from Digg or Slashdot? Or an influx of real world customers from 100 different countries? Are you ready for a world filled with flakey networks, tangled databases, and impatient users? If youre a developer and dont want to be on call for 3AM for the rest of your life, this book will help. In Release It!, Michael T. Nygard shows you how to design and architect your application for the harsh realities it will face. You ll learn how to design your application for maximum uptime, performance, and return on investment. Mike explains that many problems with systems today start with the design.'
        }
    ]

     getBooks(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.data)
                reject(new Error('Something bad happend'))
            },700)
        })
    }
    getBook(id){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.data[id])
                reject(new Error('Something bad happend'))
            },700)
        })
    }
}