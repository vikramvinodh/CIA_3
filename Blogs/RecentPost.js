import Link from 'next/link';
import React from 'react';

function RecentPost({ data }) {

    return (
        <div>
            <div className="d-flex justify-content-start align-items-center h5 fw-bold py-3">
                Other Posts
            </div>

            <div className="category">
                <ul>
                    {data.map((post, index) => (
                        <li key={index}>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RecentPost;
