(this["webpackJsonpsebs-news"]=this["webpackJsonpsebs-news"]||[]).push([[0],{23:function(e,t,a){e.exports=a(53)},28:function(e,t,a){},29:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),s=(a(28),a(1)),l=a(2),i=a(4),m=a(3),u=(a(29),a(7)),p=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement(u.a,{to:"/"},r.a.createElement("h1",null,"Seb's News App")))},d=a(6),h=a.n(d),f="https://sebs-news-api.herokuapp.com/api",v=function(e,t,a){return h.a.get("".concat(f,"/articles"),{params:{topic:e,sort_by:t,order:a}}).then((function(e){return e.data.articles}))},b=function(e){return h.a.get("".concat(f,"/articles/").concat(e)).then((function(e){return e.data.article}))},E=function(e){return h.a.get("".concat(f,"/articles/").concat(e,"/comments")).then((function(e){return e.data}))},g=function(){return h.a.get("".concat(f,"/topics")).then((function(e){return e.data.topics}))},C=function(e,t){return h.a.patch("".concat(f,"/articles/").concat(e),{inc_votes:t})},y=function(e,t){return h.a.patch("".concat(f,"/comments/").concat(e),{inc_votes:t})},O=function(e,t,a){return h.a.post("".concat(f,"/articles/").concat(a,"/comments"),{username:e,body:t})},j=function(e){return h.a.delete("".concat(f,"/comments/").concat(e))},S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={articleVotes:0},e.handleArticleUpVoteUpdate=function(){e.setState((function(e){return{articleVotes:e.articleVotes+1}}));var t=e.props.article_id;C(t,1)},e.handleArticleDownVoteUpdate=function(){e.setState((function(e){return{articleVotes:e.articleVotes+-1}}));var t=e.props.article_id;C(t,-1)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.votes,t=this.state.articleVotes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Votes: ",e+t),r.a.createElement("button",{onClick:this.handleArticleUpVoteUpdate,className:"votes_thumbs-up",disabled:1===t},r.a.createElement("span",{role:"img","aria-label":"thumbs-up-vote"},"\ud83d\udc4d")),r.a.createElement("button",{onClick:this.handleArticleDownVoteUpdate,className:"votes_thumbs-down",disabled:-1===t},r.a.createElement("span",{role:"img","aria-label":"thumbs-down-vote"},"\ud83d\udc4e")))}}]),a}(r.a.Component),_=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={commentVotes:0},e.handleCommentUpVoteUpdate=function(){e.setState((function(e){return{commentVotes:e.commentVotes+1}}));var t=e.props.comment_id;y(t,1)},e.handleCommentDownVoteUpdate=function(){e.setState((function(e){return{commentVotes:e.commentVotes+-1}}));var t=e.props.comment_id;y(t,-1)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.votes,t=this.state.commentVotes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Votes: ",e+t),r.a.createElement("button",{onClick:this.handleCommentUpVoteUpdate,className:"votes_thumbs-up",disabled:0!==t},r.a.createElement("span",{role:"img","aria-label":"thumbs-up-vote"},"\ud83d\udc4d")),r.a.createElement("button",{onClick:this.handleCommentDownVoteUpdate,className:"votes_thumbs-down",disabled:0!==t},r.a.createElement("span",{role:"img","aria-label":"thumbs-down-vote"},"\ud83d\udc4e")))}}]),a}(r.a.Component),w=function(e){var t=e.article_id,a=e.title,n=e.topic,c=e.author,o=e.votes,s=e.created_at,l=e.comment_count;return r.a.createElement("article",{className:"article-card"},r.a.createElement(u.a,{to:"/articles/".concat(t)},r.a.createElement("h3",{className:"article-title"},a)),r.a.createElement("p",null,"Topic- ",n),r.a.createElement("p",{className:"article-author"},"Author- ",c),r.a.createElement(S,{votes:o,article_id:t}),r.a.createElement("p",null,"Created At: ",s),r.a.createElement("p",null,"Comment Count: ",l))},k=function(e){var t=e.msg,a=t||"Oops, Somethings not quite right";return r.a.createElement("section",null,r.a.createElement("h3",null,"Oops! ",a))},A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={articles:[],isLoading:!0,sortBy:"",order:"desc"},e.getArticles=function(){var t=e.props.slug,a=e.state,n=a.sortBy,r=a.order;v(t,n,r).then((function(t){e.setState({articles:t,isLoading:!1})})).catch((function(t){e.setState({err:t.response.data.msg,isLoading:!1})}))},e.updateSortBy=function(t){var a=t.target.name;e.setState({sortBy:a})},e.updateOrder=function(t){var a=t.target.name;e.setState({order:a})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getArticles()}},{key:"componentDidUpdate",value:function(e,t){e.slug===this.props.slug&&t.sortBy===this.state.sortBy&&t.order===this.state.order||this.getArticles()}},{key:"render",value:function(){var e=this.state.err;return e?r.a.createElement(k,{msg:e}):this.state.isLoading?r.a.createElement("h3",null,"Loading..."):r.a.createElement("main",null,r.a.createElement("p",null,"Sort By-"),r.a.createElement("button",{onClick:this.updateSortBy,name:"created_at"},"Created at"),r.a.createElement("button",{onClick:this.updateSortBy,name:"comment_count"},"Comment Count"),r.a.createElement("button",{onClick:this.updateSortBy,name:"votes"},"Votes"),r.a.createElement("p",null,"Order"),r.a.createElement("button",{onClick:this.updateOrder,name:"asc"},"Ascending"),r.a.createElement("button",{onClick:this.updateOrder,name:"desc"},"Descending"),this.state.articles.map((function(e){return r.a.createElement(w,Object.assign({key:e.article_id},e))})))}}]),a}(n.Component),V=function(e){var t=e.slug,a=e.description;return r.a.createElement("nav",null,r.a.createElement(u.a,{to:"/topics/".concat(t)},r.a.createElement("section",{className:"NavBar_topic-card"},r.a.createElement("h3",{className:"NavBar_topic-slug"},t),r.a.createElement("p",{className:"NavBar_topic-description"},a))))},N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={topics:[]},e.getTopics=function(){g().then((function(t){e.setState({topics:t})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getTopics()}},{key:"render",value:function(){return r.a.createElement("ul",{className:"NavBar"},this.state.topics.map((function(e){return r.a.createElement(V,Object.assign({key:e.slug},e))})))}}]),a}(n.Component),D=a(22),B=function(e){var t=e.body,a=e.author,n=e.votes,c=e.created_at,o=e.comment_id,s=e.username,l=e.handleCommentDelete;return r.a.createElement("li",{className:"comment-card"},r.a.createElement("p",null,"Comment: ",t),r.a.createElement("p",null,"Author: ",a),r.a.createElement(_,{votes:n,comment_id:o}),r.a.createElement("p",null,"Created At: ",c),a===s&&r.a.createElement("button",{onClick:function(){return l(o)}},"Delete Comment"))},U=a(21),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:e.props.username,body:"",newComment:""},e.handleInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(U.a)({},n,r))},e.handleCommentSubmit=function(t){t.preventDefault();var a=e.state.body,n=e.props.article_id,r=e.state.username;O(r,a,n).then((function(t){var a=t.data;e.props.addCommentToState(a.comment)}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{type:"submit",method:"post",onSubmit:this.handleCommentSubmit},r.a.createElement("p",null,"Post a comment"),r.a.createElement("input",{type:"text",name:"body",placeholder:"Post a Comment",required:"required",onChange:this.handleInputChange}),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showComments:!1,comments:[]},e.getComments=function(){var t=e.props.article_id;E(t).then((function(t){var a=t.comments;e.setState((function(e){return{showComments:!0,comments:a,isLoading:!1}}))}))},e.showComments=function(){e.setState({showComments:!0})},e.hideComments=function(){e.setState({showComments:!1})},e.addCommentToState=function(t){e.setState((function(e){return{showComments:!0,comments:[t].concat(Object(D.a)(e.comments))}}))},e.handleCommentDelete=function(t){j(t).then((function(a){a.data;e.removeCommentFromState(t)}))},e.removeCommentFromState=function(t){e.setState((function(e){return{showComments:!0,comments:e.comments.filter((function(e){return e.comment_id!==t}))}}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getComments()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{username:this.props.username,article_id:this.props.article_id,addCommentToState:this.addCommentToState}),r.a.createElement("button",{onClick:this.showComments},"Show Comments"),r.a.createElement("button",{onClick:this.hideComments},"Hide Comments"),this.state.showComments&&r.a.createElement("ul",null,this.state.comments.map((function(t){return r.a.createElement(B,Object.assign({key:t.comment_id},t,{username:e.props.username,handleCommentDelete:e.handleCommentDelete}))}))))}}]),a}(n.Component),F=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={article:{},isLoading:!0},e.getArticleByID=function(){var t=e.props.article_id;b(t).then((function(t){e.setState({article:t,isLoading:!1,comments:[]})})).catch((function(t){e.setState({err:t.response.data.msg,isLoading:!1})}))},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getArticleByID()}},{key:"render",value:function(){var e=this.props.username,t=this.state.article,a=t.title,n=t.topic,c=t.body,o=t.author,s=t.votes,l=t.article_id,i=this.state.err;return this.state.isLoading?r.a.createElement("h3",null,"Loading..."):i?r.a.createElement(k,{msg:i}):r.a.createElement("main",{className:"Single-Article"},r.a.createElement("h2",null,a),r.a.createElement("p",null,"Topic: ",n),r.a.createElement("p",null,c),r.a.createElement("p",null,"Author: ",o),r.a.createElement(S,{votes:s,article_id:l}),r.a.createElement("p",null,"Created: ",this.state.article.created_at),r.a.createElement(T,{username:e,article_id:l}))}}]),a}(n.Component),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"tickle122",avatar:"https://cdn.dribbble.com/users/4514928/screenshots/9652230/media/337c8ccdf2f63a3d93329aec3052ec0f.jpg"},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("main",{className:"UserCard"},r.a.createElement("img",{src:this.state.avatar,alt:"User avatar",className:"user--avatar"}),"Username: ",this.state.username," "),r.a.createElement(N,null),r.a.createElement(u.b,null,r.a.createElement(A,{path:"/"}),r.a.createElement(A,{path:"/topics/:slug"}),r.a.createElement(F,{path:"articles/:article_id",username:this.state.username}),r.a.createElement(k,{default:!0})))}}]),a}(n.Component);o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.753e62b1.chunk.js.map