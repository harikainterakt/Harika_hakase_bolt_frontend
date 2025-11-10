import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';

interface ProtocolUploadProps {
  onUploadComplete: () => void;
}

const ProtocolUpload: React.FC<ProtocolUploadProps> = ({ onUploadComplete }) => {
  const [dragActive, setDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState<string>('');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);

    const analysisSteps = [
      'Uploading protocol document...',
      'Extracting document content...',
      'Analyzing protocol structure...',
      'Identifying key endpoints...',
      'Evaluating regulatory compliance...',
      'Generating insights and recommendations...',
      'Finalizing analysis...'
    ];

    for (let i = 0; i < analysisSteps.length; i++) {
      setAnalysisStep(analysisSteps[i]);
      setUploadProgress(((i + 1) / analysisSteps.length) * 100);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    setTimeout(() => {
      setIsUploading(false);
      onUploadComplete();
    }, 500);
  };

  if (isUploading) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Analyzing Your Protocol
            </h2>
            <p className="text-slate-600 mb-8">
              Our AI is processing your document and generating insights...
            </p>
            
            <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            
            <p className="text-sm text-slate-500">{analysisStep}</p>
            <p className="text-xs text-slate-400 mt-2">{Math.round(uploadProgress)}% complete</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Upload Your Protocol Document
        </h1>
        <p className="text-xl text-slate-600">
          Get AI-powered insights and analysis for your clinical trial protocol
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200 ${
            dragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-slate-300 hover:border-blue-400 hover:bg-blue-50/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="mb-6">
            <Upload className="h-16 w-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Drop your protocol here
            </h3>
            <p className="text-slate-600">
              or click to browse files
            </p>
          </div>
          
          <input
            type="file"
            id="file-upload"
            className="hidden"
            accept=".pdf,.docx,.doc"
            onChange={handleFileSelect}
          />
          
          {/* <label
            htmlFor="file-upload"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium cursor-pointer hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            Select File
          </label> */}
          <label
            htmlFor="file-upload"
            className="inline-block px-6 py-3 bg-gradient-to-r from-sky-400 to-sky-600 text-white rounded-lg font-medium cursor-pointer hover:from-sky-500 hover:to-sky-700 transition-all duration-200"
          >
            Select File
          </label>
          
          <p className="text-sm text-slate-500 mt-4">
            Supports PDF and Word documents up to 50MB
          </p>
        </div>

        {/* Info Panel */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            What happens after upload?
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                <FileText className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Document Processing</h4>
                <p className="text-sm text-slate-600">
                  AI extracts and analyzes key protocol elements
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Compliance Check</h4>
                <p className="text-sm text-slate-600">
                  Automated CDISC and regulatory compliance validation
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                <AlertCircle className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Insights Generation</h4>
                <p className="text-sm text-slate-600">
                  AI-powered recommendations and risk analysis
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-slate-50 rounded-lg">
            <h4 className="font-medium text-slate-900 mb-2">Data Security</h4>
            <p className="text-sm text-slate-600">
              Your documents are encrypted and processed securely. We never store your sensitive data permanently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolUpload;