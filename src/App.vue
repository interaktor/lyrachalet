<template>
    <div class="box_blog">
        <!-- Header Area -->
        <header>this is my life...</header>

        <!-- Article Area -->
        <article>
            <section id="info">
                <div class="avatar">
                    <img src="./assets/home-img/interaktor.jpeg" alt="">
                </div>
                <div class="bio">
                    some daily updates...
                    hope you are happy every day.
                </div>
                <div class="nav">
                    <ul>
                        <li><RouterLink to="/lyrachalet/home" active-class="link-active">Home</RouterLink></li>
                        <li><RouterLink to="/lyrachalet/blog" active-class="link-active">Blog</RouterLink></li>
                        <li><RouterLink to="#" >Music</RouterLink></li>
                        <li><RouterLink to="#" >Book</RouterLink></li>
                        <li><RouterLink to="#" >Dev</RouterLink></li>
                        <li><RouterLink to="#" >Photo</RouterLink></li>
                        <li><RouterLink to="#" >Philosophy</RouterLink></li>
                        <li><RouterLink to="#" >About</RouterLink></li>
                    </ul>
                </div>
                <table class="widget-calendar">
                    <thead>
                        <th class="calendar__header" colspan="7"><span id="nowMonth"></span> 2026</th>
                    </thead>
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

            <section id="content">
               <RouterView></RouterView>
            </section>

        </article>

    </div>
</template>

<script setup lang="ts">
import { RouterView,RouterLink } from 'vue-router';
document.addEventListener('contextmenu', e => e.preventDefault());
</script>

<style>
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
        .link-active {
            color: var(--accent-color);
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
        #content {
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
            height: 690px;
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
        
        #content {
            display: grid;
            grid-template-columns: 1fr;
            width: 490px;
            height: 690px;
            background: var(--card-bg);
            padding: 15px;
            background: var(--sidebar-bg);
        }
        
</style>
