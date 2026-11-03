// สี ฟอนต์ และเงาที่ใช้เพิ่มเติมจากค่าเริ่มต้นของ Tailwind CSS
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: '#102a43',
        navy: '#143e69',
        royal: '#1d5f98',
        skysoft: '#eef6fb',
        sun: '#f3a712',
        coral: '#ed6a5a'
      },
      fontFamily: {
        sans: ['Sarabun', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(16, 42, 67, .10)',
        lift: '0 22px 60px rgba(20, 62, 105, .18)'
      }
    }
  }
};
