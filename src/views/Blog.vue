<template>
     <div class="box_blog">
        <!-- Header Area -->
        <header>this is my life...</header>

        <!-- Article Area -->
        <article>

            <section id="info">
                <div class="avatar">
                    <img src="./img/interaktor.jpeg" alt="">
                </div>
                <div class="bio">
                    some daily updates...
                    hope you are happy every day.
                </div>
                <div class="nav">
                    <ul>
                        <li><a href="javascript:;">Home</a></li>
                        <li><a href="javascript:;">Blog</a></li>
                        <li><a href="javascript:;">Photo Gallery</a></li>
                        <li><a href="javascript:;">PSP</a></li>
                    </ul>
                </div>
                <table class="widget-calendar">
                    <th class="calendar__header" colspan="7"><span>{{ nowMonth }}</span> 2026</th>
                    <tbody id="cal-body">
                        <tr class="calendar__row">
                            <td>Su</td>
                            <td>Mo</td>
                            <td>Tu</td>
                            <td>We</td>
                            <td>Th</td>
                            <td>Fr</td>
                            <td>Sa</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id="blog">
                <div class="area">
                    <div class="area-col">
                        <a href="#">
                            <div class="daily">
                                <img src="./img/(•ᴥ•).jpeg" alt="">
                                <p>flattened by the weight of life...</p>
                                <span>2026. 19. 9</span>
                            </div>
                        </a>

                        <div class="daily">
                            <img src="./img/_.jpeg" alt="">
                            <p>weight of life...</p>
                            <span>2026. 17. 9</span>
                        </div>
                        <div class="daily">
                            <img src="./img/me core.jpeg" alt="">
                            <p>me doing my home work</p>
                            <span>2026. 16. 9</span>
                        </div>
                    </div>
                    <div class="area-col">
                        <div class="daily">
                            <img src="./img/lovesleeping.jpeg" alt="">
                            <p>l love sleeping..</p>
                            <span>2026. 10. 9</span>
                        </div>
                        <div class="daily">
                            <img src="./img/1_2.jpeg" alt="">
                            <p></p>
                            <span>2026. 9. 9</span>
                        </div>
                        <div class="daily">
                            <img src="./img/Illit Wonhee.jpeg" alt="">
                            <p>life is tough...</p>
                            <span>2026. 7. 9</span>
                        </div>
                    </div>
                    <div class="area-col">
                        <div class="daily">
                            <img src="./img/3ds.jpeg" alt="">
                            <p>3ds is simply wonderful</p>
                            <span>2026. 5. 9</span>
                        </div>
                        <div class="daily">
                            <img src="./img/groud.jpeg" alt="">
                            <p>lawns belong to nature</p>
                            <span>2026. 3. 9</span>
                        </div>
                        <div class="daily">
                            <img src="./img/cat.jpeg" alt="">
                            <p>is a waffle a cat?</p>
                            <span>2026. 30. 8</span>
                        </div>
                    </div>
                </div>
            </section>

        </article>

    </div>
</template>


<script lang="ts" setup name="Blog">
        //获取/创建元素
        // let cal_body = document.querySelector('#cal-body');
        // let nowMonth = document.querySelector('#nowMonth');
        let tr = document.createElement('tr');

        //日期
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth()

        //获取当前月的第一天（1号）是周几
        let nowDay = new Date(year, month, 1).getDay()
        //获取当前一共有多少天
        let allDay = new Date(year, month + 1, 0).getDate()

        //日历系统
        let monthArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        let nowMonth = monthArr[month - 1]

        //当月第一天是是周几？周二就代表前面有2个空格子
        for (var i = 0; i < nowDay; i++) {
            let nullTD = document.createElement('td')
            tr.appendChild(nullTD)
        }

        //从第一天开始，一直到当前的最后一天
        for (var j = 1; j <= allDay; j++) {
            let td = document.createElement('td')
            // td.innerHTML = j
            tr.appendChild(td)
            //当一个tr装满7个后，就把这个满的tr给它装给cal_body,然后创建一个新的tr，但变量名还是以前的tr，相当于覆盖了以前的
            if (tr.children.length === 7) {
                // cal_body.appendChild(tr)
                tr = document.createElement('tr')
            }
            //判断j如果等于当天就添加class
            if (j === now.getDate()) {
                td.classList.add('is_today')
            }
        }

        // 循环结束后，如果tr里面还剩下td的话，就统一放在最后一行
        if (tr.children.length > 0) {
            // cal_body.appendChild(tr);
        }


</script>


 <style scoped>
        :root {
            --bg-color: #FBF8F1;
            --card-bg: #FFFFFF;
            --sidebar-bg: #F3EFE0;
            --text-main: #434242;
            --accent-color: #22A39F;
            --border-color: #E0DDAA;
        }

        * {
            padding: 0;
            margin: 0;
            border-radius: 8px;
            box-sizing: border-box;
            list-style: none;
            font-family: 'Courier New', 'Times New Roman', Georgia, serif;
            color: var(--text-main);
        }

        body {
            background-color: var(--bg-color);
        }

        .is_today {
            background-color: #434242 !important;
            color: #ffffff !important;
            border-radius: 2px !important;
            font-weight: bold;
        }

        .box_blog {
            display: flex;
            margin: 20px auto;
            justify-content: center;
            flex-direction: column;
            width: 650px;
            gap: 10px;

        }

        header,
        #info,
        #blog {
            border: 1px solid var(--border-color);
        }

        header {
            display: flex;
            align-items: center;
            width: 650px;
            height: 40px;
            background: #F3EFE0;
            font-size: 13px;
            font-style: italic;
            text-indent: 1vh;
        }

        article {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }

        #info {
            width: 160px;
            height: 550px;
            padding: 14px 10px;
            background: var(--sidebar-bg);
        }

        .avatar img {
            width: 140px;
            border: 1px solid #ddd;
        }

        .bio {
            padding: 18px 0px;
            font-size: 11px;
            border-bottom: 1px dashed #e0dad0;
        }

        .nav {
            padding: 18px 0;
            border-bottom: 1px dashed #e0dad0;
        }


        .nav a:hover {
            color: var(--accent-color)
        }

        .widget-calendar {
            width: 140px;
            border: 1px solid #434242;
            border-radius: 4px;
            margin: 18px 0;
        }

        #cal-body td,
        .calendar__header {
            border: none !important;
            border-radius: 0 !important;
            background: transparent;
            padding: 4px 0;
            text-align: center;
            font-size: 12px;
        }

        #blog {
            display: grid;
            grid-template-columns: 1fr;
            width: 490px;
            height: 690px;
            background: var(--card-bg);
            padding: 15px;
            background: var(--sidebar-bg);

        }

        .area a {
            text-decoration: none;
        }

        .daily {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 140px;
            height: 200px;
            /* background: lightblue; */
        }

        .daily img {
            /* border-radius: 0; */
            width: 140px;
            height: 128px;
        }

        .daily p {
            /* text-align: center; */
            font-size: 12px;
            font-weight: 700;
        }

        .daily span {
            font-size: 11px;

        }

        .area-col {
            display: grid;
            padding: 10px 0px;
            grid-template-columns: 1fr 1fr .8fr;
        }
    </style>