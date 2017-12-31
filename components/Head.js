import NextHead from 'next/head';

const Head = () => (
  <div>
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </NextHead>
    <style jsx global>{`
      body {
        margin: 0 auto;
        max-width: 50em;
        font-family: 'Helvetica', 'Arial', sans-serif;
        line-height: 1.5;
        padding: 4em 1em;
        color: #555;
      }

      code,
      pre {
        background: #eee;
      }

      code {
        padding: 2px 4px;
        vertical-align: text-bottom;
      }

      pre {
        padding: 1em;
      }
    `}</style>
  </div>
);

export default Head;
