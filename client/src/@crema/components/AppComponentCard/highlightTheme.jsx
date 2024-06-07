import { Fonts } from '@crema/constants/AppEnums';

export const highlightTheme = {
  plain: {
    color: '#F8F8F2',
    fontFamily: 'Be Vietnam',
    fontWeight: Fonts.REGULAR,
    backgroundColor: '#333333',
  },
  styles: [
    {
      types: ['prolog', 'constant', 'builtin'],
      style: {
        color: '#FFFFFF',
      },
    },
    {
      types: ['inserted', 'tag', 'function'],
      style: {
        color: '#E6DB74',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)',
      },
    },
    {
      types: ['changed'],
      style: {
        color: 'rgb(255, 184, 108)',
      },
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        color: 'rgb(248, 248, 242)',
      },
    },
    {
      types: ['string', 'char', 'selector'],
      style: {
        color: '#98CD2F',
      },
    },
    {
      types: ['keyword', 'variable'],
      style: {
        color: '#65D4EA',
        // fontStyle: "italic"
      },
    },
    {
      types: ['comment'],
      style: {
        color: 'rgb(98, 114, 164)',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#98CD2F',
      },
    },
  ],
};
