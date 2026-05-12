"use client"
import { useAuth } from '@/contexts/AuthContext';
import { blogservice } from '@/services/comment';
import React, { useState } from 'react';

const CommentForm = ({ id }) => {
    const { user } = useAuth();
    const [form, setform] = useState({
        content: "",
        articleId: id
    })
    const sendcomment = (e) => {
        e.preventDefault();
        blogservice(form)
    }
    if (!user) {
        return (
            <>
                <h1>
                    برای ثبت نظر خود ابتدا در سایت ثبت نام کنید..!
                </h1>
            </>
        )
    }
    else {

        return (
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">نظر خود را بنویسید</h3>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="نام شما"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            readOnly
                            value={user.username}
                        />
                        <input
                            type="email"
                            placeholder="ایمیل شما"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            readOnly
                            value={user.email}
                        />
                    </div>
                    <textarea
                        rows={4}
                        placeholder="متن نظر شما..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        value={form.content} onChange={(e) => setform({ ...form, content: e.target.value })}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        onClick={sendcomment}
                    >
                        ارسال نظر
                    </button>
                </form>
            </div>

        );
    }
}

export default CommentForm;
