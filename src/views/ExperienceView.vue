<script setup lang="ts">
// import { defineComponent } from 'vue';
import { ref, onMounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import Header from '@/components/header/Header.vue';
import AboutMe from '@/components/about/AboutMe.vue';
// import Project from '@/components/project/Project.vue';
import Contact from '@/components/contact/Contact.vue';
import router from '@/router';
// import { defineComponent } from 'vue/dist/vue.js';

// export default defineComponent({
//   components: {
//     Header,
//     AboutMe,
//     Project,
//     Contact,
//   },
// });
  const navigateToAboutPage = () => {
    router.push({path: '/about'})
  }

  // reactive state
  const count = ref(0)

  // functions that mutate state and trigger updates
  function increment() {
    count.value++
  }

  // lifecycle hooks
  onMounted(() => {
    // console.log(`The initial count is ${count.value}.`)
  })
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- <about /> -->
    <!-- <AboutMe />
    <Project />
    <Contact /> -->
  </main>
	<!-- <section id="default-navbar" class="frame">
		<div class="nav-bar">
			<a href="#" class="nav">Home</a>
			<a href="#" class="nav">Search</a>
			<a href="#" class="nav">Following</a>
			<a href="#" class="nav">Settings</a>
		</div>
	</section> -->
	<!-- <section class="FRAME_1_19">
      <div class="FRAME_1_20">
        <div class="FRAME_1_21">
        </div>
      </div>
    </section> -->
	<div class="left-bio">
        <div class="bio-1">
          <p class="bio-1-title">My Name</p>
          <p class="bio-1-name">Hilarion Lumban Batu</p>
        </div>
        <div class="bio-2">
          <p class="bio-2-title">About Hilarion</p>
          <p class="bio-2-description">
            Love most all kind of sports, 
            was changed career since 2018 from marketing to programming.
            Been struggling starting as a programmer without mentor and decided taking course in those years.
          </p>
        </div>
        <div class="bio-3">
          <p class="bio-3-title">Language</p>
          <p class="bio-3-name">English, Indonesia</p>
        </div>
      </div>
      <div class="right-bio">
        <div class="bio-4">
          <p class="bio-4-title">Professional Details</p>
          <p class="bio-4-description">
            A fullstack engineer, able to develop backend, frontend web and mobile app.
          </p>
        </div>
        <p class="TEXT_1_102">Tech stacks</p>
        <p class="TEXT_1_103">Total Experience</p>
        <div class="stack-1">
          <div class="logo-stack">
            <img :src="'https://miro.medium.com/v2/resize:fit:500/1*vmFSpk9xtpxAHkH7cmt-3Q.png'"/>
          </div>
          <p class="TEXT_1_116">Go</p>
        </div>
        <div class="stack-2">
          <div class="logo-stack">
            <img :src="'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png'"/>
          </div>
          <p class="TEXT_1_116">Nodejs</p>
        </div>
        <div class="FRAME_1_127">
          <div class="FRAME_1_128">
            <div class="FRAME_1_129">
              <svg
                class="VECTOR_1_130"
                width="10"
                height="7.5"
                viewBox="0 0 10 7.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0L4 0C2.11438 0 1.17157 0 0.585786 0.585786C0 1.17157 0 2.11438 0 4L0 6L0 7.5L10 7.5L10 6L10 4C10 2.11438 10 1.17157 9.41421 0.585786C8.82843 0 7.88562 0 6 0Z"
                  fill="rgba(255, 255, 255, 1)"
                />
              </svg>
              <svg
                class="VECTOR_1_131"
                width="15.588456153869629"
                height="16.16598892211914"
                viewBox="0 0 15.588456153869629 16.16598892211914"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.23042 0.366115C8.33518 -0.122038 7.25328 -0.122039 6.35804 0.366115L1.56381 2.98029C0.599822 3.50593 0 4.51619 0 5.61417L0 10.5518C0 11.6498 0.599821 12.6601 1.56381 13.1857L6.35804 15.7999C7.25328 16.288 8.33518 16.288 9.23042 15.7999L14.0246 13.1857C14.9886 12.6601 15.5885 11.6498 15.5885 10.5518L15.5885 5.61417C15.5885 4.51619 14.9886 3.50593 14.0246 2.98029L9.23042 0.366115ZM7.79443 5.08301C7.51038 5.08301 7.32038 5.42385 6.94038 6.10552L6.84207 6.28188C6.73409 6.47559 6.6801 6.57244 6.59592 6.63635C6.51173 6.70026 6.40689 6.72398 6.1972 6.77142L6.00629 6.81462C5.26839 6.98157 4.89944 7.06505 4.81166 7.34733C4.72388 7.6296 4.97541 7.92373 5.47846 8.51199L5.60861 8.66417C5.75156 8.83134 5.82304 8.91492 5.85519 9.01832C5.88735 9.12173 5.87654 9.23324 5.85493 9.45627L5.83525 9.65933C5.7592 10.4442 5.72117 10.8366 5.95098 11.0111C6.18079 11.1855 6.52624 11.0265 7.21714 10.7084L7.39588 10.6261C7.59221 10.5357 7.69038 10.4905 7.79443 10.4905C7.89849 10.4905 7.99666 10.5357 8.19299 10.6261L8.37173 10.7084C9.06263 11.0265 9.40808 11.1855 9.63789 11.0111C9.8677 10.8366 9.82967 10.4442 9.75361 9.65933L9.73394 9.45627C9.71233 9.23325 9.70152 9.12172 9.73367 9.01832C9.76583 8.91492 9.8373 8.83134 9.98025 8.66418L10.1104 8.51198C10.6135 7.92373 10.865 7.6296 10.7772 7.34733C10.6894 7.06505 10.3205 6.98157 9.58257 6.81462L9.39167 6.77142C9.18198 6.72398 9.07713 6.70026 8.99295 6.63635C8.90877 6.57244 8.85478 6.47559 8.74679 6.28188L8.64848 6.10552C8.26849 5.42385 8.07849 5.08301 7.79443 5.08301Z"
                  fill="rgba(255, 255, 255, 1)"
                />
              </svg>
            </div>
          </div>
          <p class="TEXT_1_132">5 Years</p>
          <p class="TEXT_1_133">of total experience</p>
        </div>
        <p class="TEXT_1_134">Ratings</p>
        <p class="TEXT_1_135">Customer Reviews</p>
        <p class="TEXT_1_136">See all reviews -</p>
        <div class="FRAME_1_137">
          <div class="FRAME_1_138">
            <div class="FRAME_1_139">
              <svg
                class="VECTOR_1_140"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.15316 3.40838C8.41981 1.13613 9.05314 1.78347e-15 10 0C10.9469 -1.01913e-15 11.5802 1.13612 12.8468 3.40837L13.1745 3.99623C13.5345 4.64193 13.7144 4.96479 13.9951 5.17781C14.2757 5.39083 14.6251 5.4699 15.3241 5.62805L15.9605 5.77203C18.4201 6.32856 19.65 6.60682 19.9426 7.54773C20.2352 8.48864 19.3968 9.46907 17.7199 11.4299L17.2861 11.9372C16.8096 12.4944 16.5713 12.773 16.4641 13.1177C16.357 13.4624 16.393 13.8341 16.465 14.5776L16.5306 15.2544C16.7841 17.8706 16.9109 19.1787 16.1449 19.7602C15.3788 20.3417 14.2273 19.8115 11.9243 18.7512L11.3285 18.4768C10.6741 18.1755 10.3469 18.0248 10 18.0248C9.65315 18.0248 9.32593 18.1755 8.67149 18.4768L8.07567 18.7512C5.77268 19.8115 4.62118 20.3417 3.85515 19.7602C3.08912 19.1787 3.21588 17.8706 3.4694 15.2544L3.53498 14.5776C3.60703 13.8341 3.64305 13.4624 3.53586 13.1177C3.42868 12.773 3.19043 12.4944 2.71392 11.9372L2.2801 11.4299C0.603249 9.46907 -0.235175 8.48864 0.057421 7.54773C0.350017 6.60682 1.57986 6.32856 4.03954 5.77203L4.67589 5.62805C5.37485 5.4699 5.72433 5.39083 6.00494 5.17781C6.28555 4.96479 6.46553 4.64194 6.82547 3.99623L7.15316 3.40838Z"
                  fill="rgba(255, 255, 255, 1)"
                />
              </svg>
            </div>
          </div>
          <p class="TEXT_1_141">4 Stars</p>
          <p class="TEXT_1_142">from 34 customers</p>
        </div>
        <div class="FRAME_1_143">
          <div class="FRAME_1_144">
            <p class="TEXT_1_145">Ankit Srivastava</p>
          </div>
          <div class="FRAME_1_146">
            <svg
              class="STAR_1_147"
              width="22.78378677368164"
              height="22.78378677368164"
              viewBox="0 0 22.78378677368164 22.78378677368164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2173 1.71389C10.7829 0.888588 12.0009 0.888588 12.5665 1.71389L15.1232 5.44446C15.3084 5.71464 15.581 5.91272 15.8952 6.00533L20.2332 7.28411C21.1929 7.56701 21.5693 8.72538 20.9592 9.51834L18.2013 13.1027C18.0015 13.3623 17.8974 13.6828 17.9064 14.0102L18.0308 18.5311C18.0583 19.5313 17.0729 20.2472 16.1302 19.912L11.869 18.3967C11.5604 18.2869 11.2234 18.2869 10.9148 18.3967L6.65358 19.912C5.71089 20.2472 4.72552 19.5313 4.75303 18.5311L4.87737 14.0102C4.88638 13.6828 4.78224 13.3623 4.58251 13.1027L1.82459 9.51834C1.21447 8.72538 1.59084 7.56701 2.55054 7.28411L6.88859 6.00533C7.20276 5.91272 7.4754 5.71464 7.66056 5.44446L10.2173 1.71389Z"
                fill="rgba(255, 180.9437370300293, 37.187494933605194, 1)"
              />
            </svg>
            <svg
              class="STAR_1_148"
              width="22.78378677368164"
              height="22.78378677368164"
              viewBox="0 0 22.78378677368164 22.78378677368164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2173 1.71389C10.7829 0.888588 12.0009 0.888588 12.5665 1.71389L15.1232 5.44446C15.3084 5.71464 15.581 5.91272 15.8952 6.00533L20.2332 7.28411C21.1929 7.56701 21.5693 8.72538 20.9592 9.51834L18.2013 13.1027C18.0015 13.3623 17.8974 13.6828 17.9064 14.0102L18.0308 18.5311C18.0583 19.5313 17.0729 20.2472 16.1302 19.912L11.869 18.3967C11.5604 18.2869 11.2234 18.2869 10.9148 18.3967L6.65358 19.912C5.71089 20.2472 4.72552 19.5313 4.75303 18.5311L4.87737 14.0102C4.88638 13.6828 4.78224 13.3623 4.58251 13.1027L1.82459 9.51834C1.21447 8.72538 1.59084 7.56701 2.55054 7.28411L6.88859 6.00533C7.20276 5.91272 7.4754 5.71464 7.66056 5.44446L10.2173 1.71389Z"
                fill="rgba(255, 180.9437370300293, 37.187494933605194, 1)"
              />
            </svg>
            <svg
              class="STAR_1_149"
              width="22.78378677368164"
              height="22.78378677368164"
              viewBox="0 0 22.78378677368164 22.78378677368164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2173 1.71389C10.7829 0.888588 12.0009 0.888588 12.5665 1.71389L15.1232 5.44446C15.3084 5.71464 15.581 5.91272 15.8952 6.00533L20.2332 7.28411C21.1929 7.56701 21.5693 8.72538 20.9592 9.51834L18.2013 13.1027C18.0015 13.3623 17.8974 13.6828 17.9064 14.0102L18.0308 18.5311C18.0583 19.5313 17.0729 20.2472 16.1302 19.912L11.869 18.3967C11.5604 18.2869 11.2234 18.2869 10.9148 18.3967L6.65358 19.912C5.71089 20.2472 4.72552 19.5313 4.75303 18.5311L4.87737 14.0102C4.88638 13.6828 4.78224 13.3623 4.58251 13.1027L1.82459 9.51834C1.21447 8.72538 1.59084 7.56701 2.55054 7.28411L6.88859 6.00533C7.20276 5.91272 7.4754 5.71464 7.66056 5.44446L10.2173 1.71389Z"
                fill="rgba(255, 180.9437370300293, 37.187494933605194, 1)"
              />
            </svg>
            <svg
              class="STAR_1_150"
              width="22.78378677368164"
              height="22.78378677368164"
              viewBox="0 0 22.78378677368164 22.78378677368164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2173 1.71389C10.7829 0.888588 12.0009 0.888588 12.5665 1.71389L15.1232 5.44446C15.3084 5.71464 15.581 5.91272 15.8952 6.00533L20.2332 7.28411C21.1929 7.56701 21.5693 8.72538 20.9592 9.51834L18.2013 13.1027C18.0015 13.3623 17.8974 13.6828 17.9064 14.0102L18.0308 18.5311C18.0583 19.5313 17.0729 20.2472 16.1302 19.912L11.869 18.3967C11.5604 18.2869 11.2234 18.2869 10.9148 18.3967L6.65358 19.912C5.71089 20.2472 4.72552 19.5313 4.75303 18.5311L4.87737 14.0102C4.88638 13.6828 4.78224 13.3623 4.58251 13.1027L1.82459 9.51834C1.21447 8.72538 1.59084 7.56701 2.55054 7.28411L6.88859 6.00533C7.20276 5.91272 7.4754 5.71464 7.66056 5.44446L10.2173 1.71389Z"
                fill="rgba(255, 180.9437370300293, 37.187494933605194, 1)"
              />
            </svg>
            <svg
              class="STAR_1_151"
              width="22.78378677368164"
              height="22.78378677368164"
              viewBox="0 0 22.78378677368164 22.78378677368164"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2173 1.71389C10.7829 0.888588 12.0009 0.888588 12.5665 1.71389L15.1232 5.44446C15.3084 5.71464 15.581 5.91272 15.8952 6.00533L20.2332 7.28411C21.1929 7.56701 21.5693 8.72538 20.9592 9.51834L18.2013 13.1027C18.0015 13.3623 17.8974 13.6828 17.9064 14.0102L18.0308 18.5311C18.0583 19.5313 17.0729 20.2472 16.1302 19.912L11.869 18.3967C11.5604 18.2869 11.2234 18.2869 10.9148 18.3967L6.65358 19.912C5.71089 20.2472 4.72552 19.5313 4.75303 18.5311L4.87737 14.0102C4.88638 13.6828 4.78224 13.3623 4.58251 13.1027L1.82459 9.51834C1.21447 8.72538 1.59084 7.56701 2.55054 7.28411L6.88859 6.00533C7.20276 5.91272 7.4754 5.71464 7.66056 5.44446L10.2173 1.71389Z"
                fill="rgba(73.00000324845314, 69.00000348687172, 79.00000289082527, 0.800000011920929)"
              />
            </svg>
          </div>
          <div class="FRAME_1_152">
            <p class="TEXT_1_153">
              excelent conversation with him.. very knowledgeble personhappy to
              talk towith him
            </p>
          </div>
        </div>
      </div>
</template>

<style scoped>
	html {
		box-sizing: border-box;
		font-size: 16px;
	}

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ol,
	ul,
	input {
		margin: 0;
		padding: 0;
		font-weight: normal;
	}

	ol,
	ul {
		list-style: none;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	a {
		text-decoration: none;
	}

	.FRAME_1_19 {
		width: 1440px;
		min-height: 1024px;
		background-color: rgba(250.00000029802322, 251.00000023841858, 255, 1);
		border: none;
		/* position: relative; */
	}

	.FRAME_1_20 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 1440px;
		min-height: 100px;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border-top: 0px solid
			rgba(206.0000029206276, 206.0000029206276, 206.0000029206276, 1);
		border-right: 0px solid
			rgba(206.0000029206276, 206.0000029206276, 206.0000029206276, 1);
		border-bottom: 1px solid
			rgba(206.0000029206276, 206.0000029206276, 206.0000029206276, 1);
		border-left: 0px solid
			rgba(206.0000029206276, 206.0000029206276, 206.0000029206276, 1);
	}

	.GROUP_1_36 {
		transform: translate(50px, 32px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 187.5px;
		min-height: 37px;
		background-color: transparent;
		border: none;
	}
	.FRAME_1_38 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 0.072265625px 0.072265625px;
		position: absolute;
		top: 0;
		left: 0;
		width: 37px;
		min-height: 37px;
		background-color: rgba(255, 255, 255, 1);
		border: none;
	}
	.FRAME_1_39 {
		transform: translate(5.4921875px, 3.541015625px) rotate(0deg) scale(1, 1);
		transform-origin: 0.23744834959506989px 0.23744834959506989px;
		position: absolute;
		top: 0;
		left: 0;
		width: 26.015625px;
		min-height: 29.965444564819336px;
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_58 {
		transform: translate(22.555341720581055px, 18.770797729492188px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_57 {
		transform: translate(10.372182846069336px, 26.50884246826172px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_56 {
		transform: translate(22.719512939453125px, 6.4235005378723145px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_55 {
		transform: translate(10.372182846069336px, -0.0000011026859283447266px)
			rotate(0deg) scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_54 {
		transform: translate(0.00003528594970703125px, 18.935317993164062px)
			rotate(0deg) scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_53 {
		transform: translate(0.00003528594970703125px, 6.258979320526123px)
			rotate(0deg) scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_52 {
		transform: translate(22.390703201293945px, 12.020803451538086px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_51 {
		transform: translate(0.16467180848121643px, 12.020803451538086px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_50 {
		transform: translate(5.268427848815918px, 22.557558059692383px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_49 {
		transform: translate(5.268427848815918px, 3.624791145324707px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_48 {
		transform: translate(15.80521297454834px, 3.624791145324707px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_47 {
		transform: translate(15.80521297454834px, 22.393156051635742px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_46 {
		transform: translate(4.115966320037842px, 15.972086906433105px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_45 {
		transform: translate(10.04337215423584px, 21.898433685302734px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_44 {
		transform: translate(17.615758895874023px, 15.972086906433105px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_43 {
		transform: translate(4.115966320037842px, 8.37688159942627px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_42 {
		transform: translate(17.615758895874023px, 8.3997220993042px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_41 {
		transform: translate(10.04337215423584px, 4.612958908081055px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_40 {
		transform: translate(7.244538307189941px, 9.19971752166748px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.3165978193283081px 0.3165978193283081px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.TEXT_1_37 {
		transform: translate(45.5px, 0.5px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(0, 0, 0, 1);
		font-family: Outfit;
		font-weight: 400;
		font-size: 26px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0.26px;
		line-height: 32.7599983215332px;
	}
	.FRAME_1_21 {
		transform: translate(1048px, 18px) rotate(0deg) scale(1, 1);
		transform-origin: 1.1515151262283325px 1.1515151262283325px;
		position: absolute;
		top: 0;
		left: 0;
		width: min(342px, 100%);
		min-height: 64.48484802246094px;
		background-color: transparent;
		border: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		box-sizing: border-box;
		flex-wrap: wrap;
		gap: 18.42424201965332px;
	}
	.FRAME_1_26 {
		z-index: 2;
		width: min(295.93939208984375px, 100%);
		min-height: 61.030303955078125px;
		background-color: rgba(255, 255, 255, 0.5);
		box-sizing: border-box;
		border: 1.1515151262283325px solid
			rgba(232.00000137090683, 239.00000095367432, 247.00000047683716, 1);
		border-radius: 9.21212100982666px;
		padding-left: 9.21212100982666px;
		padding-right: 9.21212100982666px;
		padding-top: 11.515151023864746px;
		padding-bottom: 11.515151023864746px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 11.515151023864746px;
	}
	.FRAME_1_32 {
		z-index: 3;
		width: 27.636363983154297px;
		min-height: 27.636363983154297px;
		background-color: rgba(0, 0, 0, 0);
		border: none;
		position: relative;
	}
	.GROUP_1_33 {
		transform: translate(4.894176006317139px, 8.924627304077148px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.5858293175697327px 0.5858293175697327px;
		position: absolute;
		top: 0;
		left: 0;
		width: 17.84848403930664px;
		min-height: 9.78787899017334px;
		background-color: transparent;
		border: none;
	}
	.GROUP_1_34 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 0.5858293175697327px 0.5858293175697327px;
		position: absolute;
		top: 0;
		left: 0;
		width: 17.84848403930664px;
		min-height: 9.78787899017334px;
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_35 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 0.5858293175697327px 0.5858293175697327px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.FRAME_1_29 {
		z-index: 2;
		width: min(189.99998474121094px, 100%);
		min-height: 43.75757598876953px;
		background-color: transparent;
		border: none;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		box-sizing: border-box;
		flex-wrap: wrap;
	}
	.TEXT_1_31 {
		z-index: 2;
		color: rgba(55.00000052154064, 59.00000028312206, 92.00000211596489, 1);
		font-family: Poppins;
		font-weight: 500;
		font-size: 19.57575798034668px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 29.363636016845703px;
	}
	.TEXT_1_30 {
		z-index: 1;
		color: rgba(55.00000052154064, 59.00000028312206, 92.00000211596489, 1);
		font-family: Poppins;
		font-weight: 500;
		font-size: 11.515151023864746px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 17.27272605895996px;
	}
	.FRAME_1_27 {
		z-index: 1;
		width: 36.84848403930664px;
		min-height: 36.84848403930664px;
		background-color: rgba(255, 166.57640397548676, 141.31250202655792, 1);
		border: none;
		border-radius: 7.676767826080322px;
		position: relative;
	}
	.RECTANGLE_1_28 {
		transform: translate(-0.6326349377632141px, -1.3881540298461914px)
			rotate(0deg) scale(1, 1);
		transform-origin: 0.027114715427160263px 0.027114715427160263px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.FRAME_1_22 {
		z-index: 1;
		width: 27.636363983154297px;
		min-height: 27.636363983154297px;
		background-color: rgba(0, 0, 0, 0);
		border: none;
		position: relative;
	}
	.GROUP_1_23 {
		transform: translate(3.453657627105713px, 1.1513671875px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7578734159469604px 0.7578734159469604px;
		position: absolute;
		top: 0;
		left: 0;
		width: 21.29960823059082px;
		min-height: 24.7575740814209px;
		background-color: transparent;
		border: none;
	}
	.GROUP_1_24 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7578734159469604px 0.7578734159469604px;
		position: absolute;
		top: 0;
		left: 0;
		width: 21.29960823059082px;
		min-height: 24.7575740814209px;
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_25 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7578734159469604px 0.7578734159469604px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.banner-back {
		/* transform: translate(356px, 124px) rotate(0deg) scale(1, 1); */
		transform-origin: 1px 1px;
		/* position: fixed; */
		top: 0;
		left: 0;
		/* width: 1034px; */
		width: 100%;
		min-height: 190px;
		background-color: rgba(
			30.00000011175871,
			40.00000141561031,
			117.00000062584877,
			1
		);
		box-sizing: border-box;
		border: 1px solid rgba(255, 255, 255, 1);
		border-radius: 10px;
	}

	.FRAME_1_63 {
		transform: translate(936px, 16px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 82px;
		min-height: 26px;
		background-color: rgba(255, 255, 255, 0.30000001192092896);
		border: none;
		border-radius: 5px;
	}
	.TEXT_1_64 {
		transform: translate(18px, 6px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(255, 255, 255, 1);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_61 {
		transform: translate(1242px, 16px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 82px;
		min-height: 26px;
		background-color: rgba(255, 255, 255, 0.30000001192092896);
		border: none;
		border-radius: 5px;
	}
	.TEXT_1_62 {
		transform: translate(16px, 4px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(255, 255, 255, 1);
		font-family: Poppins;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0px;
		line-height: 18px;
	}
	.TEXT_1_60 {
		transform: translate(16px, 16px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(255, 255, 255, 1);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.left-bio {
		/* transform: translate(508px, 219px) rotate(0deg) scale(1, 1); */
		/* transform-origin: 2px 2px; */
		/* position: absolute; */
		top: 10%;
		left: 20%;
		width: 393px;
		min-height: 667px;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border: 2px solid
			rgba(235.0000011920929, 235.0000011920929, 238.00000101327896, 1);
		border-radius: 10px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15000000596046448);
	}

	.FRAME_1_87 {
		transform: translate(30px, 500px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 333px;
		min-height: 124px;
		background-color: transparent;
		box-sizing: border-box;
		border: 1px solid rgba(0, 0, 0, 0.15000000596046448);
		border-radius: 5px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10000000149011612);
	}
	.FRAME_1_93 {
		transform: translate(267px, 90px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		width: 50px;
		min-height: 18px;
		background-color: rgba(
			239.50795769691467,
			238.65966081619263,
			249.6875050663948,
			1
		);
		border: none;
		border-radius: 72.66055297851562px;
	}
	.TEXT_1_94 {
		transform: translate(17px, 5px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 7.266055583953857px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 9.155229568481445px;
	}
	.TEXT_1_92 {
		transform: translate(16px, 92px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_90 {
		transform: translate(257px, 56px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		width: 60px;
		min-height: 18px;
		background-color: rgba(
			153.20013374090195,
			252.87500202655792,
			210.24674624204636,
			1
		);
		border: none;
		border-radius: 72.66055297851562px;
	}
	.TEXT_1_91 {
		transform: translate(17px, 5px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 7.266055583953857px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 9.155229568481445px;
	}
	.TEXT_1_89 {
		transform: translate(16px, 58px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.TEXT_1_88 {
		transform: translate(16px, 18px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 16px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 20.15999984741211px;
	}
	.bio-2 {
		/* transform: translate(30px, 120px) rotate(0deg) scale(1, 1); */
		transform-origin: 1px 1px;
		position: absolute;
		top: 120px;
		left: 20px;
		width: 333px;
		min-height: 150px;
		background-color: transparent;
		box-sizing: border-box;
		border: 1px solid rgba(0, 0, 0, 0.15000000596046448);
		border-radius: 5px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10000000149011612);
	}
	.bio-2-description {
		transform: translate(16px, 50px) rotate(0deg) scale(1, 1);
		transform-origin: 1.6554545164108276px 1.6554545164108276px;
		position: absolute;
		top: 0;
		left: 0;
		right: 20px;
		color: rgba(
			73.00000324845314,
			69.00000348687172,
			79.00000289082527,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 400;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0.12px;
		line-height: 15.119999885559082px;
	}
	.bio-2-title {
		transform: translate(16px, 18px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(0, 0, 0, 1);
		font-family: Poppins;
		font-weight: 500;
		font-size: 16px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 24px;
	}
	.FRAME_1_83 {
		transform: translate(271px, 19px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		width: 46px;
		min-height: 18px;
		background-color: rgba(
			239.50795769691467,
			238.65966081619263,
			249.6875050663948,
			1
		);
		border: none;
		border-radius: 72.66055297851562px;
	}
	.TEXT_1_84 {
		transform: translate(17px, 5px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 7.266055583953857px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 9.155229568481445px;
	}
	.bio-1 {
		/* transform: translate(30px, 154px) rotate(0deg) scale(1, 1); */
		transform-origin: 1px 1px;
		position: absolute;
		top: 20px;
		left: 20px;
		right: 20px;
		/* bottom: 20px; */
		width: 333px;
		min-height: 80px;
		background-color: transparent;
		box-sizing: border-box;
		border: 1px solid rgba(0, 0, 0, 0.15000000596046448);
		border-radius: 5px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10000000149011612);
	}
  .bio-3 {
		/* transform: translate(30px, 154px) rotate(0deg) scale(1, 1); */
		transform-origin: 1px 1px;
		position: absolute;
		top: 300px;
		left: 20px;
		right: 20px;
		/* bottom: 20px; */
		width: 333px;
		min-height: 80px;
		background-color: transparent;
		box-sizing: border-box;
		border: 1px solid rgba(0, 0, 0, 0.15000000596046448);
		border-radius: 5px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10000000149011612);
	}
	.FRAME_1_80 {
		transform: translate(271px, 156px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		width: 46px;
		min-height: 18px;
		background-color: rgba(
			239.50795769691467,
			238.65966081619263,
			249.6875050663948,
			1
		);
		border: none;
		border-radius: 72.66055297851562px;
	}
	.TEXT_1_81 {
		transform: translate(17px, 5px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 7.266055583953857px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 9.155229568481445px;
	}
	.TEXT_1_79 {
		transform: translate(16px, 158px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.TEXT_1_78 {
		transform: translate(16px, 134px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.699999988079071
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_76 {
		transform: translate(271px, 98px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		width: 46px;
		min-height: 18px;
		background-color: rgba(
			239.50795769691467,
			238.65966081619263,
			249.6875050663948,
			1
		);
		border: none;
		border-radius: 72.66055297851562px;
	}
	.TEXT_1_77 {
		transform: translate(17px, 5px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 7.266055583953857px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 9.155229568481445px;
	}
	.TEXT_1_75 {
		transform: translate(16px, 100px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.TEXT_1_74 {
		transform: translate(16px, 76px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.699999988079071
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_72 {
		transform: translate(271px, 40px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		width: 46px;
		min-height: 18px;
		background-color: rgba(
			239.50795769691467,
			238.65966081619263,
			249.6875050663948,
			1
		);
		border: none;
		border-radius: 72.66055297851562px;
	}
	.TEXT_1_73 {
		transform: translate(17px, 5px) rotate(0deg) scale(1, 1);
		transform-origin: 0.7266055345535278px 0.7266055345535278px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 7.266055583953857px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 9.155229568481445px;
	}
	.bio-1-name {
		transform: translate(16px, 42px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.bio-1-title {
		transform: translate(16px, 18px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.699999988079071
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}

	.bio-3-name {
		transform: translate(16px, 42px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.bio-3-title {
		transform: translate(16px, 18px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.699999988079071
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_67 {
		transform: translate(263px, 68px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: min(93px, 100%);
		min-height: 23px;
		background-color: rgba(
			239.50795769691467,
			238.65966081619263,
			249.6875050663948,
			1
		);
		border: none;
		border-radius: 100px;
		padding-left: 16px;
		padding-right: 16px;
		padding-top: 5px;
		padding-bottom: 5px;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		box-sizing: border-box;
		flex-wrap: wrap;
		gap: 10px;
	}
	.TEXT_1_68 {
		z-index: 1;
		color: rgba(
			31.000000052154064,
			31.000000052154064,
			31.000000052154064,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 10px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 12.600000381469727px;
	}
	.ELLIPSE_1_66 {
		transform: translate(30px, 30px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.13000000193715097));
	}
	.right-bio {
		/* transform: translate(925px, 219px) rotate(0deg) scale(1, 1); */
		/* transform-origin: 2px 2px; */
		position: absolute;
		top: 10%;
		right: 20%;
		width: 393px;
		min-height: 667px;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border: 2px solid
			rgba(235.0000011920929, 235.0000011920929, 238.00000101327896, 1);
		border-radius: 10px;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15000000596046448);
	}

	.FRAME_1_143 {
		transform: translate(16px, 471px) rotate(0deg) scale(1, 1);
		transform-origin: 0.9493244886398315px 0.9493244886398315px;
		position: absolute;
		top: 0;
		left: 0;
		width: 281px;
		min-height: 138.60134887695312px;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border: 0.9493244886398315px solid
			rgba(206.0000029206276, 206.0000029206276, 206.0000029206276, 1);
		border-radius: 10.035715103149414px;
		box-shadow: 0px 3.797297954559326px 5.69594669342041px
			rgba(
				65.0000037252903,
				59.00000028312206,
				137.00000703334808,
				0.10000000149011612
			);
	}
	.FRAME_1_152 {
		transform: translate(-0.0002450125466566533px, 66.45226287841797px)
			rotate(0deg) scale(1, 1);
		transform-origin: 0.9493244886398315px 0.9493244886398315px;
		position: absolute;
		top: 0;
		left: 0;
		width: 281px;
		min-height: 60.75675964355469px;
		background-color: transparent;
		border: none;
	}
	.TEXT_1_153 {
		transform: translate(15.188572883605957px, 6.645960807800293px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.9493244886398315px 0.9493244886398315px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			73.00000324845314,
			69.00000348687172,
			79.00000289082527,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 400;
		font-size: 13.290542602539062px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0.13290542602539063px;
		line-height: 16.746084213256836px;
	}
	.FRAME_1_146 {
		transform: translate(-0.0002450125466566533px, 38.92179870605469px)
			rotate(0deg) scale(1, 1);
		transform-origin: 0.9493244886398315px 0.9493244886398315px;
		position: absolute;
		top: 0;
		left: 0;
		width: 281px;
		min-height: 22.78378677368164px;
		background-color: transparent;
		border: none;
	}
	.STAR_1_151 {
		transform: translate(144.29721069335938px, 0.00016705649613868445px)
			rotate(0deg) scale(1, 1);
		transform-origin: 2.278378963470459px 2.278378963470459px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 1.4239866733551025px;
	}
	.STAR_1_150 {
		transform: translate(112.01949310302734px, 0.00016705649613868445px)
			rotate(0deg) scale(1, 1);
		transform-origin: 2.278378963470459px 2.278378963470459px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 1.4239866733551025px;
	}
	.STAR_1_149 {
		transform: translate(79.74325561523438px, 0.00016705649613868445px)
			rotate(0deg) scale(1, 1);
		transform-origin: 2.278378963470459px 2.278378963470459px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 1.4239866733551025px;
	}
	.STAR_1_148 {
		transform: translate(47.46603775024414px, 0.00016705649613868445px)
			rotate(0deg) scale(1, 1);
		transform-origin: 2.278378963470459px 2.278378963470459px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 1.4239866733551025px;
	}
	.STAR_1_147 {
		transform: translate(15.188572883605957px, 0.00016705649613868445px)
			rotate(0deg) scale(1, 1);
		transform-origin: 2.278378963470459px 2.278378963470459px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 1.4239866733551025px;
	}
	.FRAME_1_144 {
		transform: translate(-0.0002450125466566533px, 11.391573905944824px)
			rotate(0deg) scale(1, 1);
		transform-origin: 0.9493244886398315px 0.9493244886398315px;
		position: absolute;
		top: 0;
		left: 0;
		width: 281px;
		min-height: 22.78378677368164px;
		background-color: transparent;
		border: none;
	}
	.TEXT_1_145 {
		transform: translate(15.188572883605957px, 2.8477535247802734px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.9493244886398315px 0.9493244886398315px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(65.0000037252903, 59.00000028312206, 137.00000703334808, 1);
		font-family: Outfit;
		font-weight: 500;
		font-size: 13.290542602539062px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0.13290542602539063px;
		line-height: 16.746084213256836px;
	}
	.FRAME_1_137 {
		transform: translate(16px, 371px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 281px;
		min-height: 53px;
		background-color: transparent;
		box-sizing: border-box;
		border: 1px solid rgba(0, 0, 0, 0.15000000596046448);
		border-radius: 10px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10000000149011612);
	}
	.TEXT_1_142 {
		transform: translate(13px, 28px) rotate(0deg) scale(1, 1);
		transform-origin: 1.6554545164108276px 1.6554545164108276px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			73.00000324845314,
			69.00000348687172,
			79.00000289082527,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 400;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0.12px;
		line-height: 15.119999885559082px;
	}
	.TEXT_1_141 {
		transform: translate(13px, 10px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_138 {
		transform: translate(226.05662536621094px, 1px) rotate(0deg) scale(1, 1);
		transform-origin: 0.9622641801834106px 0.9622641801834106px;
		position: absolute;
		top: 0;
		left: 0;
		width: 53.88679504394531px;
		min-height: 51px;
		background-color: rgba(255, 203.00000309944153, 0, 0.699999988079071);
		border: none;
		border-radius: 0px 9px 9px 0px;
	}
	.FRAME_1_139 {
		transform: translate(11.943359375px, 10px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 30px;
		min-height: 30px;
		background-color: transparent;
		border: none;
		border-radius: 5px;
	}
	.VECTOR_1_140 {
		transform: translate(5px, 5px) rotate(0deg) scale(1, 1);
		transform-origin: 1.5px 1.5px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.TEXT_1_136 {
		transform: translate(16px, 625px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			193.00000369548798,
			11.000000294297934,
			14.000000115484,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.TEXT_1_135 {
		transform: translate(16px, 442px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.TEXT_1_134 {
		transform: translate(16px, 342px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_127 {
		transform: translate(16px, 271px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 281px;
		min-height: 53px;
		background-color: transparent;
		box-sizing: border-box;
		border: 1px solid rgba(0, 0, 0, 0.15000000596046448);
		border-radius: 10px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10000000149011612);
	}
	.TEXT_1_133 {
		transform: translate(13px, 28px) rotate(0deg) scale(1, 1);
		transform-origin: 1.6554545164108276px 1.6554545164108276px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			73.00000324845314,
			69.00000348687172,
			79.00000289082527,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 400;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0.12px;
		line-height: 15.119999885559082px;
	}
	.TEXT_1_132 {
		transform: translate(13px, 10px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_128 {
		transform: translate(226.05662536621094px, 1px) rotate(0deg) scale(1, 1);
		transform-origin: 0.9622641801834106px 0.9622641801834106px;
		position: absolute;
		top: 0;
		left: 0;
		width: 53.88679504394531px;
		min-height: 51px;
		background-color: rgba(255, 166.57640397548676, 141.31250202655792, 1);
		border: none;
		border-radius: 0px 9px 9px 0px;
	}
	.FRAME_1_129 {
		transform: translate(11.943359375px, 10px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 30px;
		min-height: 30px;
		background-color: transparent;
		border: none;
		border-radius: 5px;
	}
	.VECTOR_1_131 {
		transform: translate(7px, 8.4169921875px) rotate(0deg) scale(1, 1);
		transform-origin: 1.5px 1.5px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_130 {
		transform: translate(9.794921875px, 5px) rotate(0deg) scale(1, 1);
		transform-origin: 1.5px 1.5px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.FRAME_1_122 {
		transform: translate(16px, 194px) rotate(0deg) scale(1, 1);
		transform-origin: 0.9999983310699463px 0.9999983310699463px;
		position: absolute;
		top: 0;
		left: 0;
		width: 75.999755859375px;
		min-height: 30px;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border: 0.9999983310699463px solid
			rgba(206.0000029206276, 206.0000029206276, 206.0000029206276, 1);
		border-radius: 29.99994659423828px;
	}
	.TEXT_1_126 {
		transform: translate(31.00103759765625px, 5.999735355377197px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.9999983310699463px 0.9999983310699463px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			73.00000324845314,
			69.00000348687172,
			79.00000289082527,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 400;
		font-size: 13.999977111816406px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0.13999977111816406px;
		line-height: 17.639970779418945px;
	}
	.FRAME_1_123 {
		transform: translate(10.000129699707031px, 6.999728679656982px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.5333324670791626px 0.5333324670791626px;
		position: absolute;
		top: 0;
		left: 0;
		width: 15.999948501586914px;
		min-height: 15.999999046325684px;
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_125 {
		transform: translate(4.3969950675964355px, 5.999098300933838px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999987602233887px 0.7999987602233887px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_124 {
		transform: translate(2.2649762630462646px, 2.799940347671509px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999987602233887px 0.7999987602233887px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.FRAME_1_117 {
		transform: translate(102px, 194px) rotate(0deg) scale(1, 1);
		transform-origin: 0.9999997019767761px 0.9999997019767761px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100.99996185302734px;
		min-height: 30px;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border: 0.9999997019767761px solid
			rgba(206.0000029206276, 206.0000029206276, 206.0000029206276, 1);
		border-radius: 29.999988555908203px;
	}
	.TEXT_1_121 {
		transform: translate(30.997312545776367px, 5.999735355377197px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.9999997019767761px 0.9999997019767761px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			73.00000324845314,
			69.00000348687172,
			79.00000289082527,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 400;
		font-size: 13.999996185302734px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0.13999996185302735px;
		line-height: 17.639995574951172px;
	}
	.FRAME_1_118 {
		transform: translate(9.997834205627441px, 6.999728679656982px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.5333331227302551px 0.5333331227302551px;
		position: absolute;
		top: 0;
		left: 0;
		width: 15.999992370605469px;
		min-height: 15.999999046325684px;
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_120 {
		transform: translate(4.399992942810059px, 5.999098300933838px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999997735023499px 0.7999997735023499px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_119 {
		transform: translate(2.2681925296783447px, 2.799973726272583px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999997735023499px 0.7999997735023499px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.stack-1 {
		/* transform: translate(112px, 151px) rotate(0deg) scale(1, 1); */
		transform-origin: 0.9999990463256836px 0.9999990463256836px;
		position: absolute;
		top: 150px;
		left: 20px;
		width: 83.99983978271484px;
		min-height: 30px;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border: 0.9999990463256836px solid
			rgba(206.0000029206276, 206.0000029206276, 206.0000029206276, 1);
		border-radius: 29.999969482421875px;
	}
	.TEXT_1_116 {
		transform: translate(31.001718521118164px, 5.999309062957764px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.9999990463256836px 0.9999990463256836px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			73.00000324845314,
			69.00000348687172,
			79.00000289082527,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 400;
		font-size: 13.999985694885254px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0.13999985694885253px;
		line-height: 17.639982223510742px;
	}
	.logo-stack {
		/* transform: translate(10.002273559570312px, 6.999302864074707px) rotate(0deg)
			scale(1, 1); */
		transform-origin: 0.5333327651023865px 0.5333327651023865px;
		position: absolute;
		/* top: 5px; */
		left: 0;
		width: 20px;
		/* height: 10px; */
		/* min-height: 15.999999046325684px; */
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_115 {
		transform: translate(4.945617198944092px, 2.6665725708007812px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999992370605469px 0.7999992370605469px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_114 {
		transform: translate(2.664400100708008px, 4.268202781677246px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999992370605469px 0.7999992370605469px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 0px 0px 0px 0px;
	}
	.VECTOR_1_113 {
		transform: translate(9.07090950012207px, 6.934354305267334px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999992370605469px 0.7999992370605469px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_112 {
		transform: translate(4.2115678787231445px, 6.340549468994141px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999992370605469px 0.7999992370605469px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.FRAME_1_104 {
		transform: translate(16px, 151px) rotate(0deg) scale(1, 1);
		transform-origin: 0.9999997615814209px 0.9999997615814209px;
		position: absolute;
		top: 0;
		left: 0;
		width: 85.99996185302734px;
		min-height: 30px;
		background-color: rgba(255, 255, 255, 1);
		box-sizing: border-box;
		border: 0.9999997615814209px solid
			rgba(206.0000029206276, 206.0000029206276, 206.0000029206276, 1);
		border-radius: 29.999990463256836px;
	}
	.TEXT_1_109 {
		transform: translate(31.001916885375977px, 5.999309062957764px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.9999997615814209px 0.9999997615814209px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			73.00000324845314,
			69.00000348687172,
			79.00000289082527,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 400;
		font-size: 13.999995231628418px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0.13999995231628418px;
		line-height: 17.63999366760254px;
	}
	.FRAME_1_105 {
		transform: translate(10.002443313598633px, 6.999302864074707px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.5333331823348999px 0.5333331823348999px;
		position: absolute;
		top: 0;
		left: 0;
		width: 15.999992370605469px;
		min-height: 15.999999046325684px;
		background-color: transparent;
		border: none;
		border-radius: 2.666666030883789px;
	}
	.VECTOR_1_108 {
		transform: translate(5.468270778656006px, 2.6665725708007812px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999998331069946px 0.7999998331069946px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_107 {
		transform: translate(5.335484027862549px, 6.268188953399658px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999998331069946px 0.7999998331069946px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_106 {
		transform: translate(2.6633639335632324px, 5.1999382972717285px) rotate(0deg)
			scale(1, 1);
		transform-origin: 0.7999998331069946px 0.7999998331069946px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.TEXT_1_103 {
		transform: translate(16px, 242px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.TEXT_1_102 {
		transform: translate(16px, 122px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.bio-4 {
		/* transform: translate(16px, 24px) rotate(0deg) scale(1, 1); */
		transform-origin: 1px 1px;
		position: absolute;
		top: 20px;
		left: 20px;
		width: 350px;
		min-height: 80px;
		background-color: transparent;
		box-sizing: border-box;
		border: 1px solid rgba(0, 0, 0, 0.15000000596046448);
		border-radius: 10px;
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.10000000149011612);
	}
	.bio-4-description {
		transform: translate(13px, 37px) rotate(0deg) scale(1, 1);
		transform-origin: 1.6554545164108276px 1.6554545164108276px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			73.00000324845314,
			69.00000348687172,
			79.00000289082527,
			0.800000011920929
		);
		font-family: Outfit;
		font-weight: 400;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0.12px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_98 {
		transform: translate(214px, 13px) rotate(0deg) scale(1, 1);
		transform-origin: 1.7999999523162842px 1.7999999523162842px;
		position: absolute;
		top: 0;
		left: 0;
		width: 54px;
		min-height: 54px;
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_100 {
		transform: translate(19.799911499023438px, 21.600000381469727px) rotate(0deg)
			scale(1, 1);
		transform-origin: 2.6999998092651367px 2.6999998092651367px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_99 {
		transform: translate(41.3999137878418px, 9.000043869018555px) rotate(-180deg)
			scale(1, 1);
		transform-origin: 2.6999998092651367px 2.6999998092651367px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.bio-4-title {
		transform: translate(13px, 15px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(
			34.00000177323818,
			34.00000177323818,
			34.00000177323818,
			0.8999999761581421
		);
		font-family: Outfit;
		font-weight: 500;
		font-size: 12px;
		text-align: left;
		vertical-align: middle;
		letter-spacing: 0px;
		line-height: 15.119999885559082px;
	}
	.FRAME_1_154 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 306px;
		min-height: 1024px;
		background-color: transparent;
		border: none;
	}

	.GROUP_1_183 {
		transform: translate(27px, 38px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 155px;
		min-height: 37px;
		background-color: transparent;
		border: none;
		border-radius: 12px;
	}
	.FRAME_1_185 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 0.3700000047683716px 0.3700000047683716px;
		position: absolute;
		top: 0;
		left: 0;
		width: 37px;
		min-height: 37px;
		background-color: rgba(255, 203.00000309944153, 0, 1);
		border: none;
		border-radius: 12px;
	}
	.RECTANGLE_1_187 {
		transform: translate(20px, 8px) rotate(-3.180554302311898e-15deg)
			scale(1.0000001192092896, 1.0000001192092896);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.TEXT_1_186 {
		transform: translate(8px, 2px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(30.00000011175871, 40.00000141561031, 117.00000062584877, 1);
		font-family: Montserrat;
		font-weight: 900;
		font-size: 26px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0.26px;
		line-height: 31.694000244140625px;
	}
	.TEXT_1_184 {
		transform: translate(47px, 3px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(0, 0, 0, 1);
		font-family: Outfit;
		font-weight: 400;
		font-size: 26px;
		text-align: left;
		vertical-align: top;
		letter-spacing: 0.26px;
		line-height: 32.7599983215332px;
	}
	.GROUP_1_177 {
		transform: translate(39px, 267px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 231px;
		min-height: 24px;
		background-color: transparent;
		border: none;
	}
	.FRAME_1_181 {
		transform: translate(215px, 4px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 16px;
		min-height: 16px;
		background-color: rgba(
			145.00000655651093,
			151.00000619888306,
			179.000004529953,
			1
		);
		border: none;
	}
	.VECTOR_1_182 {
		transform: translate(6px, 4px) rotate(0deg) scale(1, 1);
		transform-origin: 2px 2px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.TEXT_1_180 {
		transform: translate(38px, 2px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(145.00000655651093, 151.00000619888306, 179.000004529953, 1);
		font-family: Outfit;
		font-weight: 500;
		font-size: 16px;
		text-align: left;
		vertical-align: top;
		letter-spacing: -0.16px;
		line-height: 20.15999984741211px;
	}
	.FRAME_1_178 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 0.800000011920929px 0.800000011920929px;
		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		min-height: 24px;
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_179 {
		transform: translate(3.4000000953674316px, 3.4000000953674316px) rotate(0deg)
			scale(1, 1);
		transform-origin: 1.2000000476837158px 1.2000000476837158px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.FRAME_1_175 {
		transform: translate(254px, 143px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 16px;
		min-height: 16px;
		background-color: rgba(
			145.00000655651093,
			151.00000619888306,
			179.000004529953,
			1
		);
		border: none;
	}
	.VECTOR_1_176 {
		transform: translate(6px, 4px) rotate(0deg) scale(1, 1);
		transform-origin: 2px 2px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.GROUP_1_169 {
		transform: translate(39px, 203px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 231px;
		min-height: 24px;
		background-color: transparent;
		border: none;
	}
	.FRAME_1_173 {
		transform: translate(215px, 4px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 16px;
		min-height: 16px;
		background-color: rgba(
			145.00000655651093,
			151.00000619888306,
			179.000004529953,
			1
		);
		border: none;
	}
	.VECTOR_1_174 {
		transform: translate(6px, 4px) rotate(0deg) scale(1, 1);
		transform-origin: 2px 2px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.TEXT_1_172 {
		transform: translate(38px, 2px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(145.00000655651093, 151.00000619888306, 179.000004529953, 1);
		font-family: Outfit;
		font-weight: 500;
		font-size: 16px;
		text-align: left;
		vertical-align: top;
		letter-spacing: -0.16px;
		line-height: 20.15999984741211px;
	}
	.FRAME_1_170 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 0.800000011920929px 0.800000011920929px;
		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		min-height: 24px;
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_171 {
		transform: translate(3.400019884109497px, 3.4000000953674316px) rotate(0deg)
			scale(1, 1);
		transform-origin: 1.2000000476837158px 1.2000000476837158px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.GROUP_1_165 {
		transform: translate(39px, 139px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 73px;
		min-height: 24px;
		background-color: transparent;
		border: none;
	}
	.TEXT_1_168 {
		transform: translate(38px, 2px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(145.00000655651093, 151.00000619888306, 179.000004529953, 1);
		font-family: Outfit;
		font-weight: 500;
		font-size: 16px;
		text-align: left;
		vertical-align: top;
		letter-spacing: -0.16px;
		line-height: 20.15999984741211px;
	}
	.FRAME_1_166 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 0.800000011920929px 0.800000011920929px;
		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		min-height: 24px;
		background-color: transparent;
		border: none;
	}
	.VECTOR_1_167 {
		transform: translate(3.4000000953674316px, 3.4000000953674316px) rotate(0deg)
			scale(1, 1);
		transform-origin: 1.2000000476837158px 1.2000000476837158px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.RECTANGLE_1_164 {
		transform: translate(28px, 128px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 8px;
	}
	.GROUP_1_155 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 306px;
		min-height: 1024px;
		background-color: transparent;
		border: none;
	}
	.GROUP_1_157 {
		transform: translate(39px, 118.81135559082031px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 116px;
		min-height: 20.514190673828125px;
		background-color: transparent;
		border: none;
	}
	.TEXT_1_163 {
		transform: translate(38px, 0.8545867204666138px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		color: rgba(255, 255, 255, 1);
		font-family: Poppins;
		font-weight: 500;
		font-size: 14px;
		text-align: left;
		vertical-align: top;
		letter-spacing: -0.14px;
		line-height: 21px;
	}
	.FRAME_1_158 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		width: 24px;
		min-height: 20.514190673828125px;
		background-color: rgba(
			145.00000655651093,
			151.00000619888306,
			179.000004529953,
			1
		);
		border: none;
	}
	.VECTOR_1_162 {
		transform: translate(13.394499778747559px, 9.145910263061523px) rotate(0deg)
			scale(1, 1);
		transform-origin: 2px 2px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_161 {
		transform: translate(9.599980354309082px, 13.180367469787598px) rotate(0deg)
			scale(1, 1);
		transform-origin: 1.5px 1.5px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_160 {
		transform: translate(6.502742290496826px, 5.568756580352783px) rotate(0deg)
			scale(1, 1);
		transform-origin: 1.5px 1.5px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.VECTOR_1_159 {
		transform: translate(2px, 1.709515929222107px) rotate(0deg) scale(1, 1);
		transform-origin: 1.5px 1.5px;
		position: absolute;
		top: 0;
		left: 0;
	}
	.RECTANGLE_1_156 {
		transform: translate(0px, 0px) rotate(0deg) scale(1, 1);
		transform-origin: 1px 1px;
		position: absolute;
		top: 0;
		left: 0;
		filter: drop-shadow(
			0px 10px 30px
				rgba(225.83437621593475, 236.193745136261, 248.62500607967377, 0.65)
		);
	}

</style>
