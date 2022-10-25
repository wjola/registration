const NewsletterConsent = ({ isChecked, onChange }) => {

  return (
    <div>
      <input
        type="checkbox"
        id="newsletter"
        label="Newsletter consent"
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor="newsletter">Zgoda na newsletter</label>
    </div>
  );
}

export default NewsletterConsent;