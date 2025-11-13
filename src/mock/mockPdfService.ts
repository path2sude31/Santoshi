export const mockPdfService = {
  generatePdf: async (storyId: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1500));

    return `/mock-pdfs/story-${storyId}.pdf`;
  }
};
