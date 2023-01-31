import React from 'react';

class Confirmation extends React.Component {
  state = {
    confirmation: '',
  };

  componentDidMount() {
    let { confirmation } = this.props;
    const extractscript = /<script>(.+)<\/script>/gi.exec(confirmation);
    if (extractscript) {
      confirmation = confirmation.replace(extractscript[0], '');
      this.setState({ confirmation }, () => window.eval(extractscript[1]));
    } else {
      this.setState({ confirmation });
    }
  }

  render() {
    const { confirmation } = this.state;
    const { SFormConfirmation } = this.props;

    return SFormConfirmation ? (
      <SFormConfirmation success message={confirmation} />
    ) : (
      <div className="form-confirmation" dangerouslySetInnerHTML={{ __html: confirmation }} />
    );
  }
}
export default Confirmation;

