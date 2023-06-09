import axios from "axios";

export const deleteLabel = async (userId, labelId) => {
  let config = {
    headers: {
      userId,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/labels/delete/${labelId}`,

      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error in deleting all notes.");
  }
};
