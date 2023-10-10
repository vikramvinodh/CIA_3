/*Check "Required parameters for unauthenticated requests" session
You will need to enable upload_preset inside the Management Console (Settings) -> Upload tab -> Upload presets*/

export const FileUpload = async (file) => {
    let result = null;

    let formData = new FormData();
    formData.append('image', file);
    // formData.append('upload_preset', `${process.env.REACT_APP_SERVER_URL}`);

    await fetch(`${process.env.REACT_APP_SERVER_URL}/blog/upload-image`, {
        method: 'POST',
        body: formData
    })
        .then((response) => response.json())
        .then((data) => {
            result = data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    return result;
}


