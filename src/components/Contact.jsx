import React, { useRef, useState } from 'react';
import { SectionWrapper } from './hoc';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

// Replace with your own EmailJS keys and IDs
const SERVICE_ID = 'service_xfh511f';
const TEMPLATE_ID = 'template_wxzzx2k';
const PUBLIC_KEY = 'nRpDFkvYsg6-pBhHf';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (form.name === '' || form.email === '' || form.message === '') {
      alert('Form cannot be empty');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        to_name: 'Sanchit',
        from_email: form.email,
        to_email: 'driveforlaptop2024@gmail.com',
        message: form.message,
      }, PUBLIC_KEY);

      alert('Thank you, I got your message and will get back to you as soon as possible');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send the message:', error);
      alert('Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-[#000407] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's Your Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's Your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>What's Your Message?</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do You want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
