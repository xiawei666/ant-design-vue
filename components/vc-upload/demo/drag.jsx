import Upload from '../index';

export default {
  render() {
    const uploaderProps = {
      props: {
        action: '//jsonplaceholder.typicode.com/posts/',
        type: 'drag',
        accept: '.png',
        beforeUpload(file) {
          console.log('beforeUpload', file.name);
        },
        openFileDialogOnClick: false,
      },
      on: {
        start(file) {
          console.log('start', file, file.name);
        },
        success(file) {
          console.log('success', file);
        },
        progress(step, file) {
          console.log('progress', Math.round(step.percent), file.name);
        },
        error(err) {
          console.log('error', err);
        },
        click() {
          alert('click');
        },
      },
      style: { display: 'inline-block', width: '200px', height: '200px', background: '#eee' },
    };
    return <Upload {...uploaderProps} />;
  },
};
