import React from 'react';
import { Container } from "@material-ui/core";
import SectionTitle from '../../Components/SectionTitle';

const Blog = () => {
    return (
        <Container component="section" py={4}>
            <SectionTitle
            title="মাতৃভাষায় প্রোগ্রামিং ব্লগ"
            subtitle="বাংলায় ব্লগ পরতে নিয়মিত চোখ রাখুন।"
          />
        </Container>
    );
};

export default Blog;