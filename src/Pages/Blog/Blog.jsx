import React from 'react';
import { Container } from "@material-ui/core";
import SectionTitle from '../../Components/SectionTitle';

const Blog = () => {
    return (
        <Container component="section" py={4}>
            <SectionTitle
            title="প্রোগ্রামিং শিখুন মাতৃভাষা বাংলায়।"
            subtitle="আসুন প্রোগ্রামিং এর জগতে যাত্রা শুরু করি।"
          />
        </Container>
    );
};

export default Blog;