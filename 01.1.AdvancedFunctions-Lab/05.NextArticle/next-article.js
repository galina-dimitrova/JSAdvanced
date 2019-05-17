function getArticleGenerator(articles) {
    let article = (function(){
        next = articles.shift()
        document.getElementById('content').textContent=next
        console.log(next)
        return articles
    })()
       return article  
    // }
    
}    
