const Result = ({ selectedCrop, uploadedImage, prediction }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Take full height of the viewport
      backgroundColor: '#f0f8ff',
    },
    resultCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      width: '300px',
      textAlign: 'left',
      marginTop: '20px', // Optional space above the result card
    },
    resultTitle: {
      margin: '0 0 10px',
      color: '#333',
    },
    resultImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    detailsBox: {
      backgroundColor: '#f9f9f9',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      width: '100%',
      marginTop: '10px', // Add space above the button
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.resultCard}>
        <h1 style={styles.resultTitle}>Prediction Result</h1>
        <img src={uploadedImage} alt="Uploaded" style={styles.resultImage} />
        <h2 style={{ color: '#4CAF50' }}>{selectedCrop.charAt(0).toUpperCase() + selectedCrop.slice(1)} Crop</h2>
        <div style={styles.detailsBox}>
          <h3 style={{ margin: '0' }}>Prediction: {prediction.predicted_disease}</h3>
          <p><strong>Confidence:</strong> {prediction.confidence_score.toFixed(2)}%</p>
          <p><strong>Cause:</strong> {prediction.cause}</p>
          <p><strong>Prevention:</strong> {prediction.prevention}</p>
          <p><strong>Medicines:</strong> {prediction.medicines}</p>
        </div>
        <button style={styles.button} onClick={() => window.location.reload()}>
          Upload Another Image
        </button>
      </div>
    </div>
  );
};

export default Result;
