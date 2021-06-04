// "<link rel='stylesheet' href='./css/style2.css'>"+
        // "<link rel='stylesheet' href='./css/style.css'>"+
        //"<main>"    
            //"<section class='container'>"+
            //    "<div class='site-content'></div>"+    
                    "<div class='posts'>"+    
                        "<div class='post-content' data-aos='zoom-in' data-aos-delay='200'>"+
                            "<div class='post-image'>"+
                                "<div>"+
                                    "<img src='"+value.imageURL+"' class='img' alt='blog1'>"+
                                "</div>"+
                                "<div class='post-info flex-row'>"+
                                    "<span><i class='fas fa-user text-gray'></i>&nbsp;&nbsp;Admin</span>"+
                                    "<span><i class='fas fa-calendar-alt text-gray'></i>&nbsp;&nbsp;January 14, 2019</span>"+
                                    "<span>2 Commets</span>"+
                                "</div>"+
                            "</div>"+
                            "<div class='post-title'>"+
                                "<a href='#'>Hello Galgotians!</a>"+
                                "<p>"+value.text+"</p>"+
                                "<button class='btn post-btn'>Read More &nbsp; <i class='fas fa-arrow-right'></i></button>"+
                                "<button class='btn btn-danger' id='"+key+"' onclick='delete_post(this.id)'>Delete</button>"+
                            "</div>"+
                        "</div>"+
                        "<hr>"+
                    "</div>" + posts_div.innerHTML; 
              //  "</div>"+ 
            //"</section>"

            //     "<aside class='sidebar'>"+
                //     "<div class='category'>"+
                //         "<h2>Course Category</h2>"+
                //         "<ul class='category-list'>"+
                //             "<li class='list-items' data-aos='fade-left' data-aos-delay='100'>"+
                //                 "<a href='#'>SCSE</a>"+
                //                 "<span>(05)</span>"+
                //             "</li>"+
                //             "<li class='list-items' data-aos='fade-left' data-aos-delay='200'>"+
                //                 "<a href='#'>ECEE</a>"+
                //                 "<span>(02)</span>"+
                //             "</li>"+
                //             "<li class='list-items' data-aos='fade-left' data-aos-delay='300'>"+
                //                 "<a href='#'>GSOA</a>"+
                //                 "<span>(07)</span>"+
                //             "</li>"+
                //             '<li class="list-items" data-aos="fade-left" data-aos-delay="400">'+
                //                 '<a href="#">MBA</a>'+
                //                 '<span>(01)</span>'+
                //             '</li>'+
                //             '<li class="list-items" data-aos="fade-left" data-aos-delay="500">'+
                //                 '<a href="#">BBA</a>'+
                //                 '<span>(08)</span>'+
                //             '</li>'+
                //         '</ul>'+
                //     '</div>'+
                //     '<div class="popular-post">'+
                //        ' <h2>Calendar</h2>'+
                //         '<div class="post-content" data-aos="flip-up" data-aos-delay="200">'+
                //             '<div class="post-image">'+
                //                 '<div>'+
                //                     '<img src="#" class="img" alt="blog1">'+
                //                 '</div>'+
                //                 '<div class="post-info flex-row">'+
                //                     '<span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,2021</span>'+
                //                     '<span>2 Comments</span>'+
                //                 '</div>'+
                //             '</div>'+
                //             '<div class="post-title">'+
                //                 '<a href="#">Assignment Submission</a>'+
                //             '</div>'+
                //         '</div>'+
                //         '<div class="post-content" data-aos="flip-up" data-aos-delay="300">'+
                //             '<div class="post-image">'+
                //                 '<div>'+
                //                    ' <img src="#" class="img" alt="blog1">'+
                //                 '</div>'+
                //                 '<div class="post-info flex-row">'+
                //                     '<span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,2021</span>'+
                //                     '<span>2 Comments</span>'+
                //                 '</div>'+
                //             '</div>'+
                //             '<div class="post-title">'+
                //                 '<a href="#">Assignment Submission</a>'+
                //             '</div>'+
                //         '</div>'+
                //         '<div class="post-content" data-aos="flip-up" data-aos-delay="400">'+
                //             '<div class="post-image">'+
                //                 '<div>'+
                //                     '<img src="#" class="img" alt="blog1">'+
                //                 '</div>'+
                //                 '<div class="post-info flex-row">'+
                //                     '<span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,2021</span>'+
                //                     '<span>2 Comments</span>'+
                //                 '</div>'+
                //             '</div>'+
                //             '<div class="post-title">'+
                //                 '<a href="#">Quiz</a>'+
                //             '</div>'+
                //         '</div>'+
                //         '<div class="post-content" data-aos="flip-up" data-aos-delay="500">'+
                //             '<div class="post-image">'+
                //                 '<div>'+
                //                     '<img src="#" class="img" alt="blog1">'+
                //                 '</div>'+
                //                 '<div class="post-info flex-row">'+
                //                     '<span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,2021</span>'+
                //                     '<span>2 Comments</span>'+
                //                 '</div>'+
                //             '</div>'+
                //             '<div class="post-title">'+
                //                 '<a href="#">Quiz</a>'+
                //             '</div>'+
                //         '</div>'+
                //         '<div class="post-content" data-aos="flip-up" data-aos-delay="600">'+
                //             '<div class="post-image">'+
                //                 '<div>'+
                //                     '<img src="#" class="img" alt="blog1">'+
                //                ' </div>'+
                //                 '<div class="post-info flex-row">'+
                //                     '<span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14,2021</span>'+
                //                     '<span>2 Comments</span>'+
                //                 '</div>'+
                //             '</div>'+
                //             '<div class="post-title">'+
                //                 '<a href="#">Quiz</a>'+
                //             '</div>'+
                //         '</div>'+
                //     '</div>'+
                // '</aside>'+