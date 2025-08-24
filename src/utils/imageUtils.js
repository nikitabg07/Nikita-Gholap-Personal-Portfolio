/**
 * Gets the correct URL for an image in both development and production
 * @param {string} path - The path to the image relative to the public folder
 * @returns {string} The complete URL to the image
 */
export const getImageUrl = (path) => {
  // If it's already a full URL, return as is
  if (path.startsWith('http')) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // In development, use the public URL path
  if (process.env.NODE_ENV === 'development') {
    return `/${cleanPath}`;
  }
  
  // In production, use the relative path from the root
  return `./${cleanPath}`;
};
