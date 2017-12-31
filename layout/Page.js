import Head from '../components/Head';

const Page = ({ children }) => (
  <div>
    <Head />
    {children}
  </div>
);

export default Page;
