import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react';



const BlogPost: NextPage = () => {
    const router = useRouter();
    const blogId = router.query.blogId;

    console.log(blogId)
    return (
        <div>
            <p style={{color: 'white'}}>{blogId}</p>
        </div>
    )
}

export default BlogPost;