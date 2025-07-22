function Map () {
  return (
    <div className="mt-20">
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3527.984075477827!2d25.819531540570917!3d-17.940413055328936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194fe517bd2bea39%3A0x15b554875ea1c780!2sLulu%20Academy!5e1!3m2!1sen!2szw!4v1753107026684!5m2!1sen!2szw"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;