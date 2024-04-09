<template>
    <div class="bg-[#000] w-full h-full min-h-screen flex flex-col items-center">
        <div class="w-full max-w-[1440px] min-h-[calc(100vh-17.9rem)] pt-[3rem] pb-[2.3rem] px-6 flex flex-col items-center gap-10">
            <div class="w-full">
                <button @click="$router.push('/blog')" class="text-[#fff] flex items-center justify-start gap-1">
                    <Icon icon="material-symbols-light:chevron-left" class="text-[2.5rem]" />
                    <p>Back</p>
                </button>
            </div>

            <div class="lg:w-[40rem] md:w-[40rem] sm:w-full">
                <div class="w-full flex flex-row justify-between items-end gap-1 mb-7">
                   <div class="flex flex-row gap-1"><p class="text-[rgb(180,180,180)] text-base"><Icon icon="mdi:account" /> </p><span class="text-white text-md leading-4">Harraz Masri</span></div>
                   <div class="flex flex-row gap-1"><p class="text-[rgb(180,180,180)] text-base"><Icon icon="mdi:calendar-blank" /> </p><span class="text-white text-md leading-4">{{ postData.formatted_created_at }}</span></div>
                </div>

                <div @click="fullScreenImage=!fullScreenImage" :class="fullScreenImage?'fixed w-screen h-screen top-0 left-0 flex justify-center backdrop-blur-sm':'relative w-full bg-[rgb(50,50,50)]'" class="cursor-pointer mb-7">
                    <img v-if="postData.thumbnail" :src="postData.thumbnail.name" draggable="false" :class="fullScreenImage?'scale-[.9]':''" class="select-none aspect-[4/3] object-cover relative h-auto mb-7" />
                </div>

                <h1 class="font-augeBold text-white text-2xl tracking-wide">{{ postData.title }}</h1>
                <p class="text-white text-base tracking-wider font-[600] text-justify leading-5 mt-3" v-html="postData.body"></p>

                <div class="mt-10 w-fit flex flex-col justify-between items-start gap-1">
                    <p class="text-[rgb(180,180,180)] text-sm">share: </p>
                    <div class="flex flex-row gap-1 items-center">
                        <Icon @click="share('facebook')" icon="mdi:facebook" class="text-white cursor-pointer  hover:opacity-80 text-2xl" />
                        <!-- <Icon @click="share('twitter')" icon="mdi:twitter" class="text-white cursor-pointer  hover:opacity-80 text-2xl" /> -->
                        <!-- <Icon  icon="mdi:instagram" class="text-white cursor-pointer  hover:opacity-80 text-2xl" /> -->
                        <Icon @click="share('whatsapp')" icon="mdi:whatsapp" class="text-white cursor-pointer  hover:opacity-80 text-2xl" />
                        <Icon icon="mdi:link" class="text-white cursor-pointer  hover:opacity-80 text-2xl" />
                    </div>
                </div>

                <div class="mt-7 w-full border-b-[.3rem] border-[rgb(50,50,50)]"></div>

                <div class="mt-7 flex flex-row items-center justify-between gap-2 w-full mb-3">
                    
                    <div class="flex flex-row items-center justify-start gap-2">
                        <h1 class="font-augeBold text-white text-2xl tracking-wide">Comments</h1>
                        <div v-if="postData.comment" class="bg-[rgb(30,30,30)] min-w-[1.9rem] h-[1.9rem] p-2 flex items-center justify-center text-[1.2rem] leading-[1rem] rounded-full text-white">
                            {{ postData.comment.length + (postData.comment.map((commentData) => { return commentData.reply.length; }).reduce((accumulator, currentVal) => accumulator + currentVal, 0)) }}
                        </div>
                    </div>

                    <select v-model="currentSort" @change="fetchPost()" class="w-[5rem] flex justify-start items-center cursor-pointer text-[rgb(200,200,200)] gap-1 leading-5 bg-transparent border-none ring-0 outline-none">
                        <option value="desc" class="bg-black">Latest</option>
                        <option value="asc" class="bg-black">Oldest</option>
                    </select>
                </div>

                <p v-if="authenticatedUserData" class="flex justify-start items-center text-[rgb(200,200,200)] gap-1 text-sm leading-5 mb-3">Commenting as {{ authenticatedUserData.username ?? '' }}</p>
                
                <div ref="scrollComponent">
                    <div 
                        v-for="(comment) in commentList"
                        class=""
                    >
                        <div class="flex flex-col w-full h-fit items-center justify-center">
                            <div class="w-full flex flex-row gap-3 justify-start items-center h-full">
                                <div v-if="!comment.user.profile_photo" class="w-[3rem]">
                                    <div class="bg-[rgb(50,50,50)] rounded-full w-[3rem] h-[3rem] flex justify-center items-center">
                                        <Icon icon="mdi:account" class="text-white text-xl" />
                                    </div>
                                </div>
                                <img v-else :src="comment.user.profile_photo" class="w-[3rem] h-[3rem] object-cover rounded-full" alt="">
                                <div class="w-full flex flex-col">
                                    <p class="text-white text-base tracking-wider font-[600] text-justify leading-5">{{ comment.user.username }}</p>
                                    <p class="text-[rgb(200,200,200)] text-sm tracking-wider font-[400] text-justify leading-5">{{ comment.created_at }}</p>
                                </div>
                            </div>
                            <div class="w-full flex flex-row gap-3 h-fit">
                                <div class="w-[3rem] flex justify-center">
                                    <div class="w-[.12rem] h-full bg-[rgb(50,50,50)]"></div>
                                </div>
    
                                <div class="flex flex-col">
                                    <p class="text-white text-base tracking-wider font-[400] text-justify leading-5 my-1 whitespace-pre">
                                        {{ comment.description }}
                                    </p>
    
                                    <button @click="currentSelectedComment=comment; commentDetails.comment_id=comment.id;" class="mt-1 pb-5 flex justify-start items-center text-[rgb(200,200,200)] gap-1 text-sm leading-5"><Icon icon="mdi:reply" />reply</button>
    
                                    <!-- reply -->
                                    <div class="w-full flex flex-col justify-start items-start">
                                        <div 
                                            v-for="reply, replyIndex in comment.reply"
                                            class=""
                                        >
                                            <div class="flex flex-col w-full h-fit items-center justify-center">
                                                <div class="w-full flex flex-row gap-3 justify-start items-center h-full">
                                                    <div v-if="!reply.user.profile_photo" class="w-[3rem]">
                                                        <div class="bg-[rgb(50,50,50)] rounded-full w-[3rem] h-[3rem] flex justify-center items-center">
                                                            <Icon icon="mdi:account" class="text-white text-xl" />
                                                        </div>
                                                    </div>
                                                    <img v-else :src="reply.user.profile_photo" class="w-[3rem] h-[3rem] object-cover rounded-full" alt="">
                                                    <div class="w-full flex flex-col">
                                                        <p class="text-white text-base tracking-wider font-[600] text-justify leading-5">{{ reply.user.username }}</p>
                                                        <p class="text-[rgb(200,200,200)] text-sm tracking-wider font-[400] text-justify leading-5">{{ reply.created_at }}</p>
                                                    </div>
                                                </div>
                                                <div class="w-full flex flex-row gap-3 h-fit">
                                                    <div class="w-[3rem] flex justify-center">
                                                        <div :class="replyIndex+1 != comment.reply.length ? 'bg-[rgb(50,50,50)]' : ''" class="w-[.12rem] h-full"></div>
                                                    </div>
    
                                                    <div class="flex flex-col">
                                                        <p class="text-white text-base tracking-wider font-[400] text-justify leading-5 mt-1 whitespace-pre">
                                                            {{ reply.description }}
                                                        </p>
                                                        
                                                        <button @click="currentSelectedComment=comment; commentDetails.comment_id=comment.id;" class="mt-1 pb-5 flex justify-start items-center text-[rgb(200,200,200)] gap-1 text-sm leading-5"><Icon icon="mdi:reply" />reply</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="authenticatedUserData" class="w-full h-fit flex flex-row justify-start items-center">
                    <div class="w-full border-[.15rem] rounded border-[rgb(200,200,200)] px-6 py-3">
                        <div v-if="currentSelectedComment" class="w-full flex justify-between items-center">
                            <p class="flex justify-start items-center text-[rgb(200,200,200)] gap-1 text-sm leading-5"><Icon icon="mdi:reply" />replying to {{ currentSelectedComment.user.username }}</p>
                            <button @click="currentSelectedComment={user: {username: '', profile_photo: ''}}; commentDetails.comment_id=0" class="text-gray-500 text-xs font-bold bg-[rgb(40,40,40)] p-0.5 rounded-full"><Icon icon="mdi:close" /></button>
                        </div>
                        <div contenteditable="plaintext-only" ref="commentField" type="text" class="w-full whitespace-pre min-h-[2rem] bg-transparent text-white pt-1 border-none outline-none ring-0 font-[400]"></div>
                    </div>
                    <button @click="submitComment" class="w-[8rem] h-fit text-white">Comment</button>
                </div>

                <!-- <a @click="login" class="text-sm text-white flex items-center gap-2 w-full border-[.15rem] rounded border-[rgb(200,200,200)] px-6 py-3 hover:bg-[rgb(20,20,20)]"><Icon icon="logos:google-icon" class="" /> Login with google</a> -->

                <div v-if="!authenticatedUserData && postData.comment" :class="postData.comment.length != 0 ? '' : 'mt-3'" class="w-full">
                    <GoogleLogin :callback="callback" auto-login prompt />
                        <!-- <button class="text-sm text-white flex items-center gap-2 w-full border-[.15rem] rounded border-[rgb(200,200,200)] px-6 py-3 hover:bg-[rgb(20,20,20)]"><Icon icon="logos:google-icon" class="" /> Login with google</button> -->
                    <!-- </GoogleLogin> -->
                </div>

                <!-- <button @click="checkSession" class="text-sm text-white flex items-center gap-2 w-full border-[.15rem] rounded border-[rgb(200,200,200)] px-6 py-3 hover:bg-[rgb(20,20,20)]">check session</button> -->
                <!-- <button @click="clearSession" class="text-sm text-white flex items-center gap-2 w-full border-[.15rem] rounded border-[rgb(200,200,200)] px-6 py-3 hover:bg-[rgb(20,20,20)]">clear Session</button> -->

            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import Footer from '../components/layout/Footer.vue';
import { ref, onMounted, onUnmounted, Ref } from 'vue';
import axios from 'axios';
import edjsHTML from 'editorjs-html';
import { decodeCredential } from 'vue3-google-login';
// import { Settings } from 'http2';

interface User {
    profile_photo: string;
    username: string;
}
interface Comment {
    user: User;
    reply: {
        created_at: string;
        description: string;
        user: User;
    }[];
    description: string;
    id: number;
    created_at: string,
}
interface PostData {
    id: number;
    formatted_created_at: string;
    thumbnail?: { name: string };
    title: string;
    body: string;
    description?: string;
    comment?: Comment[];
}
interface AuthenticatedUserData {
    username: string,
}
interface CurrentSelectedComment {
    user: User;
}

const fullScreenImage = ref(false);
const edjsParser = edjsHTML();
const postData = ref<PostData>({
    id: 0,
    formatted_created_at: '',
    thumbnail: { name: '' },
    title: '',
    body: '',
    description: '',
    comment: [{
        user: { 
            profile_photo: '', 
            username: '', 
        },
        reply: [],
        description: '',
        id: 0,
        created_at: '',
    }], 
});
// const postData = ref('');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const postId = urlParams.get('id');
const commentField = ref({
    textContent: '',
});
const scrollComponent = ref(null);
const currentSelectedComment = ref<CurrentSelectedComment>({
    user: {
        username: '',
        profile_photo: '',
    },
});
// const currentSelectedComment = ref(null);
// const commentHasRequest = ref(false);
const currentSort = ref('desc');

const commentList = ref<Comment[]>([
    { 
        user: { 
            profile_photo: '',
            username: '' 
        }, 
        reply: [],
        description: '',
        id: 0,
        created_at: '',
    },
]);
// const commentList = ref([]);
// const commentListOffset = ref(0);

const commentDetails = ref({
    description: '',
    user_id: '',
    post_id: '',
    comment_id: 0,
});

const authenticatedUserData: Ref<AuthenticatedUserData | null> = ref<AuthenticatedUserData | null>(null);
// const authenticatedUserData = ref(null);

onMounted(() => {
    if (localStorage.getItem('token') != null) {
        checkSession();
    }

    fetchPost();

    window.addEventListener("scroll", handleScroll)
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll)
})

const fetchPost = () => {
    axios.post('http://127.0.0.1:8000/api/post/view', {
        id: postId,
        filter_sort: currentSort.value,
    })
    .then((response) => { 
        console.log(response);
        let item = response.data;
        let parsedJSON = JSON.parse(item.body);
        item.body = item.body != null ? edjsParser.parse(parsedJSON).join('') : '';
        postData.value = response.data;
        commentList.value = postData.value.comment ?? [];
        commentDetails.value.post_id = response.data.id;
    });
}

const handleScroll = () => {
    // const element = scrollComponent.value;
    
    // if (element?.getBoundingClientRect().bottom < window.innerHeight && !commentHasRequest.value) {
    //     commentListOffset.value += 5;

    //     fetchMoreComments();

    //     commentHasRequest.value = true;
    //     setTimeout(() => {
    //         commentHasRequest.value = false;
    //     }, 1000);
    // }
}

// const fetchMoreComments = () => {
//     axios.post('http://127.0.0.1:8000/api/post/fetch-comment', { 
//         offSet: commentListOffset.value,
//         postId: postData.value.id,
//     })
//     .then((response) => {
//         console.log(response.data);
//         commentList.value = [...commentList.value, ...response.data];
//     });
// }

const submitComment = () => {
    commentDetails.value.description = commentField.value.textContent ?? '';
    axios.post('http://127.0.0.1:8000/api/post/comment', commentDetails.value)
    .then((response) => { 
        console.log(response.data);
        commentDetails.value.description = '';
        commentField.value.textContent = '';
        // currentSelectedComment.value = null;
        if (currentSelectedComment.value !== null) {
            currentSelectedComment.value = {
                user: {
                    username: '',
                    profile_photo: '',
                },
            };
        }
    });

    fetchPost();
}

// const callback: CallbackTypes.CodeResponseCallback = (response) => {
const callback = (response: any) => {
    interface UserDetails {
        sub: string;
        name: string;
        email: string;
        picture: string;
    }
    const authCred = response;
    const userDetails = decodeCredential(response.credential) as UserDetails;
    // const userDetails = decodeCredential(response.credential);
    // const JWTtoken = response.credential;
    console.log(authCred, userDetails);

    axios.post('http://127.0.0.1:8000/api/auth/google/login', {
        credential: authCred.credential,
        google_id: userDetails.sub,
        full_name: userDetails.name,
        email: userDetails.email,
        profile_photo: userDetails.picture,
    })
    .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        checkSession();
    })
    .catch((err) => {
        console.error(err);
    });
}

// const clearSession = () => {
//    localStorage.removeItem('token');
//     authenticatedUserData.value = null;
// } 

const checkSession = () => {
    const token = localStorage.getItem('token');
    axios.get('http://127.0.0.1:8000/api/auth/google/session', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
        }
    }).then((res) => {
        console.log(res.data);
        authenticatedUserData.value = res.data;
        commentDetails.value.user_id = res.data.google_id;
    })
    .catch((err) => {
        console.error(err);
    });
}

const share = (platform: string) => {
    const currentUrl = window.location.href;
    let mediaUrl = '';
    let message = 'Read more on this link below.';

    if (platform) {
        if (platform === 'facebook') {
            mediaUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        // } else if (platform === 'twitter') {
        //     mediaUrl = `http://x.com/share?text=Check%20out%20this%20post%20via%20harrazmasri%20official%website%20->%20${currentUrl}`;
        } else if (platform === 'whatsapp') {
            mediaUrl = `https://api.whatsapp.com/send?text=Check%20out%20this%20post%20via%20harrazmasri%20official%website%20->%20${currentUrl}`;
        }
        window.open(mediaUrl, '_blank');
    }
    else {
        if (navigator.share && navigator.canShare({})) {
            navigator.share({
                title: postData.value.title,
                text: 'Read more on this link below.',
                url: currentUrl,
            })
                .then(() => console.log('Post shared'))
                .catch((err) => console.error('Error sharing: ' + err));
        } else {
            const storage = document.createElement('textarea');
            storage.value = message;
            document.body.appendChild(storage);
            storage.select();
            storage.setSelectionRange(0, 99999);
            document.execCommand('copy');
            document.body.removeChild(storage);
    
            // Use Clipboard API for modern browsers
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(currentUrl)
                .then(() => {
                    console.log('Message copied to clipboard');
                })
                .catch((err) => console.error('Error copying to clipboard: ' + err));
            }
        }
    }
};

</script>

<style>
blockquote {
    margin: .7rem 0 .7rem 0;
    padding: 1rem 1.3rem 1rem 1.3rem;
    background-color: rgb(30,30,30);
}
li {
    list-style: disc;
    margin-left: 1.2rem;
}
</style>