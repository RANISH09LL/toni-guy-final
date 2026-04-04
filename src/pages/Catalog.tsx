import { useRef, useState, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid3x3 } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './Catalog.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDF_URL = '/price-catalog.pdf';

// Individual page component (forwardRef required by react-pageflip)
import React from 'react';

interface FlipPageProps {
  pageNumber: number;
  width: number;
  height: number;
}

const FlipPage = React.forwardRef<HTMLDivElement, FlipPageProps>(
  ({ pageNumber, width, height }, ref) => {
    return (
      <div className="flipbook-page" ref={ref}>
        <Page
          pageNumber={pageNumber}
          width={width}
          height={height}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading={
            <div className="page-loading">
              <div className="page-loading-spinner" />
            </div>
          }
        />
      </div>
    );
  }
);
FlipPage.displayName = 'FlipPage';

const Catalog = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const flipBookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive sizing
  const getBookDimensions = useCallback(() => {
    const maxW = isFullscreen ? window.innerWidth * 0.42 : Math.min(520, window.innerWidth * 0.38);
    const h = maxW * 1.414; // A4 ratio
    return { width: Math.round(maxW), height: Math.round(h) };
  }, [isFullscreen]);

  const { width: pageWidth, height: pageHeight } = getBookDimensions();

  useGSAP(() => {
    window.scrollTo(0, 0);
    gsap.from('.page-transition-enter', {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out'
    });
    gsap.from('.flipbook-wrapper', {
      opacity: 0, scale: 0.96, duration: 1, delay: 0.3, ease: 'power3.out'
    });
  });

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setTotalPages(numPages);
  };

  const flipPrev = () => flipBookRef.current?.pageFlip()?.flipPrev();
  const flipNext = () => flipBookRef.current?.pageFlip()?.flipNext();
  const goToPage = (n: number) => {
    flipBookRef.current?.pageFlip()?.flip(n);
    setShowThumbnails(false);
  };

  const onFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  // Listen for ESC to exit fullscreen
  React.useEffect(() => {
    const handler = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  return (
    <div className={`catalog-page page-transition-enter ${isFullscreen ? 'catalog-fullscreen' : ''}`}>
      {/* Header */}
      <div className="section text-center pb-0" style={{ marginTop: '80px', marginBottom: '2rem' }}>
        <span className="section-subtitle">Price Catalog</span>
        <h1 className="section-title">Our Services & Pricing</h1>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Flip through our complete rate card — just like the real thing.
        </p>
      </div>

      {/* Flipbook */}
      <div className={`flipbook-stage ${isFullscreen ? 'flipbook-stage-fullscreen' : ''}`} ref={containerRef}>
        <div className="flipbook-wrapper">
          <Document file={PDF_URL} onLoadSuccess={onDocumentLoadSuccess} loading={
            <div className="flipbook-loading">
              <div className="flipbook-loading-inner">
                <div className="page-loading-spinner" />
                <p>Loading catalog…</p>
              </div>
            </div>
          }>
            {totalPages > 0 && (
              <HTMLFlipBook
                ref={flipBookRef}
                width={pageWidth}
                height={pageHeight}
                size="fixed"
                minWidth={300}
                maxWidth={600}
                minHeight={424}
                maxHeight={849}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onFlip}
                flippingTime={800}
                usePortrait={window.innerWidth < 768}
                startPage={0}
                drawShadow={true}
                maxShadowOpacity={0.35}
                autoSize={false}
                className="flipbook-book"
                style={{}}
                startZIndex={0}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
                clickEventForward={false}
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <FlipPage key={i} pageNumber={i + 1} width={pageWidth} height={pageHeight} />
                ))}
              </HTMLFlipBook>
            )}
          </Document>
        </div>

        {/* Bottom Controls */}
        {totalPages > 0 && (
          <div className="flipbook-controls glass">
            <button className="flip-btn" onClick={flipPrev} disabled={currentPage === 0} aria-label="Previous page">
              <ChevronLeft size={20} />
            </button>

            <button className="flip-btn" onClick={() => setShowThumbnails(!showThumbnails)} aria-label="Toggle thumbnails">
              <Grid3x3 size={18} />
            </button>

            <span className="page-indicator">
              {currentPage + 1} / {totalPages}
            </span>

            <button className="flip-btn" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
              {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </button>

            <button className="flip-btn" onClick={flipNext} disabled={currentPage >= totalPages - 1} aria-label="Next page">
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Thumbnail Grid Overlay */}
        {showThumbnails && totalPages > 0 && (
          <div className="thumbnail-overlay" onClick={() => setShowThumbnails(false)}>
            <div className="thumbnail-grid" onClick={(e) => e.stopPropagation()}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`thumbnail-item ${currentPage === i ? 'active' : ''}`}
                  onClick={() => goToPage(i)}
                >
                  <Document file={PDF_URL}>
                    <Page pageNumber={i + 1} width={140} renderTextLayer={false} renderAnnotationLayer={false} />
                  </Document>
                  <span className="thumbnail-num">{i + 1}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
