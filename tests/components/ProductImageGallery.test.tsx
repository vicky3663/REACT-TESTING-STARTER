import ProductImageGallery from '../../src/components/ProductImageGallery';
import { screen, render } from '@testing-library/react';

describe('ProductImageGallery', () => {
    it('should render nothing if given an empty array', () => {
        const{container}= render(<ProductImageGallery imageUrls={[]} />);
        expect(container).toBeEmptyDOMElement();
    });  
    it('should render  list of images', () => {
      const imageUrls = ['url1', 'url2'];
      
      render(<ProductImageGallery imageUrls={imageUrls} />);

      const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
imageUrls.forEach((url, index) => {
        expect(images[index]).toHaveAttribute('src', url);
    })
    });
});