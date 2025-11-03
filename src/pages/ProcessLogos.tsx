import { useState } from 'react';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';
import { Button } from '@/components/ui/button';
import shFinance from '@/assets/partners/sh-finance.png';
import b2c2 from '@/assets/partners/b2c2.png';
import insource from '@/assets/partners/insource.jpeg';
import bequant from '@/assets/partners/bequant.jpg';

const logos = [
  { name: 'SH Finance', src: shFinance, fileName: 'sh-finance.png' },
  { name: 'B2C2', src: b2c2, fileName: 'b2c2.png' },
  { name: 'Insource', src: insource, fileName: 'insource.png' },
  { name: 'Bequant', src: bequant, fileName: 'bequant.png' },
];

export default function ProcessLogos() {
  const [processing, setProcessing] = useState<string | null>(null);
  const [processed, setProcessed] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);

  const processLogo = async (logo: typeof logos[0]) => {
    try {
      setProcessing(logo.name);
      setError(null);
      
      // Load the image
      const response = await fetch(logo.src);
      const blob = await response.blob();
      const img = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(img);
      const url = URL.createObjectURL(processedBlob);
      
      setProcessed(prev => ({ ...prev, [logo.name]: url }));
      setProcessing(null);
    } catch (err) {
      console.error('Error processing logo:', err);
      setError(`Failed to process ${logo.name}: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setProcessing(null);
    }
  };

  const downloadLogo = (logoName: string, url: string, fileName: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Logo Background Removal Utility</h1>
        
        {error && (
          <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {logos.map((logo) => (
            <div key={logo.name} className="border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4">{logo.name}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Original:</p>
                  <div className="bg-white p-4 rounded border">
                    <img src={logo.src} alt={logo.name} className="max-h-32 mx-auto" />
                  </div>
                </div>

                {processed[logo.name] && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Processed:</p>
                    <div className="bg-gray-100 p-4 rounded border">
                      <img src={processed[logo.name]} alt={`${logo.name} processed`} className="max-h-32 mx-auto" />
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button
                    onClick={() => processLogo(logo)}
                    disabled={processing !== null}
                  >
                    {processing === logo.name ? 'Processing...' : 'Remove Background'}
                  </Button>
                  
                  {processed[logo.name] && (
                    <Button
                      variant="secondary"
                      onClick={() => downloadLogo(logo.name, processed[logo.name], logo.fileName)}
                    >
                      Download
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Click "Remove Background" for each logo</li>
            <li>Wait for processing to complete (may take 30-60 seconds per logo)</li>
            <li>Click "Download" to save the processed logo</li>
            <li>Replace the files in src/assets/partners/ with the downloaded versions</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
